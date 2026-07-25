import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function Booking() {
  const [projectType, setProjectType] = useState("");
  const navigate = useNavigate();


const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

const [formLoadedAt] = useState(Date.now());

const [formData, setFormData] = useState({
  projectType: "",
  studioModel: "",
  grannyModel: "",
  purpose: "",
  name: "",
  email: "",
  phone: "",
  suburb: "",
  address: "",
  message: "",
});

const updateField = (
  field: keyof typeof formData,
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,

    ...(field === "projectType"
      ? {
          studioModel: "",
          grannyModel: "",
        }
      : {}),
  }));
};

const encode = (
  data: Record<string, string>
) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) +
        "=" +
        encodeURIComponent(data[key])
    )
    .join("&");
};

const suburbs = [
  "Brighton",
  "Bentleigh",
  "Malvern",
  "Kew",
  "Mount Eliza",
  "Sandringham",
  "Frankston",
  "St Kilda",
  "Caulfield",
  "Eltham",
  "Another Melbourne suburb",
];

const phoneRegex =
  /^(\+61|0)[2-9]\d{8}$/;

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const nameRegex =
  /^[A-Za-zÀ-ÿ' -]{2,60}$/;

const addressRegex =
  /^\d+.*$/;

const fakeNames = [
  "test",
  "testing",
  "admin",
  "asdf",
  "qwerty",
  "unknown",
  "demo",
  "sample",
];

const spamWords = [
  "seo",
  "backlink",
  "guest post",
  "guest-post",
  "google ranking",
  "rank your website",
  "marketing agency",
  "casino",
  "bitcoin",
  "crypto",
  "loan",
  "forex",
  "viagra",
  "porn",
  "escort",
  "telegram",
  "whatsapp group",
  "buy now",
  "click here",
];

const validateForm = () => {
  const secondsOnPage =
    (Date.now() - formLoadedAt) / 1000;

  if (secondsOnPage < 5) {
    setError(
      "Please take a moment to complete the form before submitting."
    );
    return false;
  }

  if (!nameRegex.test(formData.name.trim())) {
    setError("Please enter a valid name.");
    return false;
  }

  if (
    fakeNames.includes(
      formData.name.trim().toLowerCase()
    )
  ) {
    setError("Please enter your real name.");
    return false;
  }

  if (!phoneRegex.test(formData.phone.trim())) {
    setError(
      "Please enter a valid Australian phone number."
    );
    return false;
  }

  const digits = formData.phone.replace(/\D/g, "");

  if (/^(.)\1+$/.test(digits)) {
    setError("Please enter a valid phone number.");
    return false;
  }

  if (!emailRegex.test(formData.email.trim())) {
    setError("Please enter a valid email address.");
    return false;
  }

  if (!formData.suburb) {
    setError("Please select your suburb.");
    return false;
  }

  if (!formData.address.trim()) {
    setError("Please enter the property address.");
    return false;
  }

  if (!addressRegex.test(formData.address.trim())) {
    setError("Please enter a valid property address.");
    return false;
  }

  if (!formData.projectType) {
    setError("Please select a project type.");
    return false;
  }

  if (
    formData.projectType === "Studio" &&
    !formData.studioModel
  ) {
    setError("Please select a studio model.");
    return false;
  }

  if (
    formData.projectType === "Granny Flat" &&
    !formData.grannyModel
  ) {
    setError("Please select a granny flat model.");
    return false;
  }

  if (!formData.purpose) {
    setError(
      "Please select the purpose of your project."
    );
    return false;
  }

  if (formData.message.trim().length > 1500) {
    setError("Message is too long.");
    return false;
  }

  if (formData.message.trim().length < 10) {
    setError(
      "Please tell us a little more about your project."
    );
    return false;
  }

  const gibberish =
    /(asdf|qwerty|zxcv|123456|aaaa|bbbb|xxxxx)/i;

  if (gibberish.test(formData.message)) {
    setError("Please enter a meaningful message.");
    return false;
  }

  if (/(.)\1{7,}/.test(formData.message)) {
    setError("Please enter a meaningful message.");
    return false;
  }

  const linkCount =
    (formData.message.match(/https?:\/\//gi) || [])
      .length +
    (formData.message.match(/www\./gi) || [])
      .length;

  if (linkCount > 1) {
    setError("Please remove links from your message.");
    return false;
  }

  const combined = (
    formData.name +
    formData.email +
    formData.message
  ).toLowerCase();

  if (
    spamWords.some((word) =>
      combined.includes(word)
    )
  ) {
    setError("Spam detected.");
    return false;
  }

  setError("");
  return true;
};

const resetForm = () => {
  setFormData({
    projectType: "",
    studioModel: "",
    grannyModel: "",
    purpose: "",
    name: "",
    email: "",
    phone: "",
    suburb: "",
    address: "",
    message: "",
  });
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "booking",
        ...formData,
      }),
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    resetForm();

    sessionStorage.setItem(
      "formSubmitted",
      "true"
    );

    navigate("/thank-you");
  } catch (err) {
    setError(
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">

{/* HERO */}

<section className="bg-[#F5F0EB] py-36">

  <div className="max-w-5xl mx-auto px-8 text-center">

    <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
      Book A Consultation
    </span>

    <h1 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,6vw,6rem)] mt-8 leading-[0.95]">
      Let's Discuss
      <br />
      Your Project
    </h1>

    <p className="text-[#5F5A55] max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
      Tell us a little about your vision and we'll arrange a consultation
      to explore the possibilities for your backyard space.
    </p>

  </div>

</section>

{/* FORM */}

<section className="px-8 pb-32 bg-[#F5F0EB]">

  <div className="max-w-5xl mx-auto bg-white rounded-[32px] p-10 md:p-14 border border-[rgba(46,42,38,0.08)] shadow-sm">

    <h3 className="text-2xl text-[#2E2A26] mb-2">
      Tell Us About Your Project
    </h3>

    <p className="text-[#5F5A55] mb-10">
      Share a few details and our team will contact you within 24 hours.
    </p>

    <form
  name="booking"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
  className="space-y-8"
>

      {/* NETLIFY */}

      <input type="hidden" name="form-name" value="booking" />

      <p hidden>
        <label>
          Don't fill this out:
          <input name="bot-field" />
        </label>
      </p>

{/* PROJECT TYPE */}

<div>
  <label className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4">
    Project Type
  </label>

  <div className="flex flex-wrap gap-3">
    {["Studio", "Granny Flat", "Not Sure Yet"].map((item) => (
      <label key={item} className="cursor-pointer">

        <input
          type="radio"
          name="projectType"
          value={item}
          checked={formData.projectType === item}
          onChange={(e) =>
            updateField("projectType", e.target.value)
          }
          className="peer hidden"
        />

        <div
          className="
            px-6 py-3
            rounded-full
            border
            border-[rgba(46,42,38,0.08)]
            bg-[#F5F0EB]
            text-[#5F5A55]
            transition-all
            duration-300
            peer-checked:bg-[#C7A77A]
            peer-checked:text-[#2E2A26]
            peer-checked:border-[#C7A77A]
            hover:border-[#C7A77A]
          "
        >
          {item}
        </div>

      </label>
    ))}
  </div>
</div>

{formData.projectType === "Studio" && (
  <div>
    <label className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4">
      Studio Model
    </label>

    <select
      name="studioModel"
      required
      value={formData.studioModel}
      onChange={(e) =>
        updateField("studioModel", e.target.value)
      }
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        border
        border-[rgba(46,42,38,0.08)]
        bg-[#FAF8F5]
        text-[#2E2A26]
        appearance-none
        focus:border-[#C7A77A]
        focus:bg-white
        outline-none
        transition-all
      "
    >
      <option value="">Select Studio Model</option>
      <option value="The Nest 15">The Nest 15</option>
      <option value="The Aspen 20">The Aspen 20</option>
      <option value="The Brighton 22">The Brighton 22</option>
      <option value="The Vista 26">The Vista 26</option>
    </select>
  </div>
)}

{formData.projectType === "Granny Flat" && (
  <div>
    <label className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4">
      Granny Flat Model
    </label>

    <select
      name="grannyModel"
      required
      value={formData.grannyModel}
      onChange={(e) =>
        updateField("grannyModel", e.target.value)
      }
      className="
        w-full
        px-5
        py-4
        rounded-2xl
        border
        border-[rgba(46,42,38,0.08)]
        bg-[#FAF8F5]
        text-[#2E2A26]
        appearance-none
        focus:border-[#C7A77A]
        focus:bg-white
        outline-none
        transition-all
      "
    >
      <option value="">Select Granny Flat Model</option>
      <option value="1 Bedroom">1 Bedroom</option>
      <option value="2 Bedroom">2 Bedroom</option>
      <option value="Custom Design">Custom Design</option>
    </select>
  </div>
)}

<div>
  <label className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] block mb-4">
    Purpose of Your Project
  </label>

  <select
    name="purpose"
    required
    value={formData.purpose}
    onChange={(e) =>
      updateField("purpose", e.target.value)
    }
    className="
      w-full
      px-5
      py-4
      rounded-2xl
      border
      border-[rgba(46,42,38,0.08)]
      bg-[#FAF8F5]
      text-[#2E2A26]
      appearance-none
      focus:border-[#C7A77A]
      focus:bg-white
      outline-none
      transition-all
    "
  >
    <option value="">Select Purpose</option>
    <option value="Home Office">Home Office</option>
    <option value="Guest Accommodation">Guest Accommodation</option>
    <option value="Teenage Retreat">Teenage Retreat</option>
    <option value="Rental Income">Rental Income</option>
    <option value="Extra Living Space">Extra Living Space</option>
    <option value="Home Gym">Home Gym</option>
    <option value="Creative Studio">Creative Studio</option>
    <option value="Other">Other</option>
  </select>
</div>

      {/* DETAILS */}

<div className="grid md:grid-cols-2 gap-6">

  <input
    type="text"
    name="name"
    required
    value={formData.name}
    onChange={(e) => updateField("name", e.target.value)}
    placeholder="Full Name"
    autoComplete="name"
    maxLength={60}
    className="w-full px-5 py-4 rounded-2xl border border-[rgba(46,42,38,0.08)] bg-[#FAF8F5] text-[#2E2A26] focus:border-[#C7A77A] focus:bg-white outline-none transition-all"
  />

  <input
    type="email"
    name="email"
    required
    value={formData.email}
    onChange={(e) => updateField("email", e.target.value)}
    placeholder="Email Address"
    autoComplete="email"
    maxLength={100}
    className="w-full px-5 py-4 rounded-2xl border border-[rgba(46,42,38,0.08)] bg-[#FAF8F5] text-[#2E2A26] focus:border-[#C7A77A] focus:bg-white outline-none transition-all"
  />

  <input
    type="tel"
    name="phone"
    required
    value={formData.phone}
    onChange={(e) => updateField("phone", e.target.value)}
    placeholder="04XX XXX XXX"
    autoComplete="tel"
    maxLength={15}
    className="w-full px-5 py-4 rounded-2xl border border-[rgba(46,42,38,0.08)] bg-[#FAF8F5] text-[#2E2A26] focus:border-[#C7A77A] focus:bg-white outline-none transition-all"
  />

  <select
    name="suburb"
    required
    value={formData.suburb}
    onChange={(e) => updateField("suburb", e.target.value)}
    className="w-full px-5 py-4 rounded-2xl border border-[rgba(46,42,38,0.08)] bg-[#FAF8F5] text-[#2E2A26] focus:border-[#C7A77A] focus:bg-white outline-none transition-all"
  >
    <option value="">Select suburb</option>

    {suburbs.map((suburb) => (
      <option key={suburb} value={suburb}>
        {suburb}
      </option>
    ))}
  </select>

</div>

{/* ADDRESS */ }
 <input
    type="text"
    name="address"
    required
    value={formData.address}
    onChange={(e) => updateField("address", e.target.value)}
    placeholder="123 Example Street, Brighton VIC 3186"
    autoComplete="street-address"
    maxLength={120}
    className="
      w-full
      px-5
      py-4
      rounded-2xl
      border
      border-[rgba(46,42,38,0.08)]
      bg-[#FAF8F5]
      text-[#2E2A26]
      focus:border-[#C7A77A]
      focus:bg-white
      outline-none
      transition-all
    "
/>
      {/* MESSAGE */}

<textarea
  name="message"
  rows={6}
  value={formData.message}
  onChange={(e) =>
    updateField("message", e.target.value)
  }
  placeholder="Tell us about your project, ideas, timeline or any questions you may have..."
  maxLength={1500}
  className="
    w-full
    px-5
    py-4
    rounded-2xl
    border
    border-[rgba(46,42,38,0.08)]
    bg-[#FAF8F5]
    text-[#2E2A26]
    resize-none
    focus:border-[#C7A77A]
    focus:bg-white
    outline-none
    transition-all
  "
/>

{error && (
  <div className="bg-red-100 border border-red-300 text-red-700 rounded-2xl px-5 py-4 text-sm">
    {error}
  </div>
)}

      {/* BUTTON */}

      <div className="flex justify-end">

 <div className="flex justify-end">

  <button
    type="submit"
    disabled={loading}
    className="
      px-10
      py-4
      bg-[#2E2A26]
      text-[#F5F0EB]
      rounded-full
      transition-all
      duration-300
      hover:bg-[#C7A77A]
      hover:text-[#2E2A26]
      hover:-translate-y-1
      disabled:opacity-60
      disabled:cursor-not-allowed
      flex
      items-center
      justify-center
      gap-2
    "
  >
    {loading ? (
      <>
        <Loader2
          size={18}
          className="animate-spin"
        />
        Sending...
      </>
    ) : (
      "Book Consultation"
    )}
  </button>

</div>

      </div>

    </form>

  </div>

</section>

{/* CONSULTATION BENEFITS */}

<section className="bg-[#EFE8DF] py-28">

  <div className="max-w-6xl mx-auto px-8 md:px-16">

    <div className="text-center mb-20">

      <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
        What To Expect
      </span>

      <h2 className="editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4rem)] mt-6">
        A Consultation Designed
        <br />
        Around Your Goals
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Discuss Your Ideas",
          text: "Share your vision, requirements and goals for your backyard space."
        },
        {
          title: "Explore Possibilities",
          text: "Discover design options tailored to your property and lifestyle."
        },
        {
          title: "Get Expert Guidance",
          text: "Receive practical advice on layouts, planning and next steps."
        }
      ].map((item) => (

        <div
          key={item.title}
          className="
            bg-white
            rounded-[28px]
            p-8
            border border-[rgba(46,42,38,0.08)]
            hover:border-[#C7A77A]
            hover:-translate-y-1
            transition-all duration-300
          "
        >

          <h3 className="text-[#2E2A26] text-2xl mb-4">
            {item.title}
          </h3>

          <p className="text-[#5F5A55] leading-relaxed">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
    </div>
  );

}