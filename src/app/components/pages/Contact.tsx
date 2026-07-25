import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../SEO";
import { Loader2 } from "lucide-react";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const navigate = useNavigate();

const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState(false);

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
        "form-name": "contact",
        ...formData,
      }),
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    resetForm();

    setSuccess(true);

    navigate("/thank-you", {
  state: {
    formSubmitted: true,
  },
});
  } catch (err) {
    setError(
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div>
      <SEO
    title="Contact Us | Backyard Nest"
    description="Explore completed backyard studios, granny flats and studio projects across Melbourne."
    url="https://backyardnest.com.au/gallery"
/>
      {/* HERO */}

      <section className="bg-[#F5F0EB] py-40">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-[60%_40%] gap-20 items-center">
            <div>
              <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
                Contact Us
              </span>

              <h1 className="editorial-heading text-[#2E2A26] text-[clamp(4rem,7vw,7rem)] mt-8 leading-[0.95]">
                Let's Start
                <br />A Conversation.
              </h1>

              <div className="w-24 h-[2px] bg-[#C7A77A] mt-8 mb-8" />

              <p className="text-[#5F5A55] text-lg max-w-xl leading-relaxed">
                Whether you're planning a backyard studio, granny flat, home
                office or simply exploring ideas, our team is here to help guide
                your next step.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <div className="bg-white px-5 py-3 rounded-full border border-[rgba(46,42,38,0.08)]">
                  Backyard Studios
                </div>

                <div className="bg-white px-5 py-3 rounded-full border border-[rgba(46,42,38,0.08)]">
                  Granny Flats
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-[32px] p-10 border border-[rgba(46,42,38,0.08)]">
                <span className="uppercase tracking-[0.25em] text-[#A08E7C] text-xs">
                  Response Time
                </span>

                <h3 className="text-[#2E2A26] text-3xl mt-4 mb-4">
                  We're Here To Help
                </h3>

                <p className="text-[#5F5A55] leading-relaxed">
                  Most enquiries receive a response within 24 hours. Tell us
                  about your project and we'll point you in the right direction.
                </p>

                <div className="flex items-center gap-3 mt-8">
                  <div className="w-3 h-3 rounded-full bg-[#C7A77A]" />

                  <span className="text-[#5F5A55] text-sm">
                    Average response time: Within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-[35%_65%] gap-16">
            {/* LEFT SIDE */}

            <div>
              <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
                Your Project
              </span>

              <h2 className="editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4rem)] mt-6 leading-tight">
                Tell Us What
                <br />
                You're Planning
              </h2>

              <p className="text-[#5F5A55] mt-8 leading-relaxed">
                Select the option that best describes your project and we'll
                tailor our response accordingly.
              </p>
            </div>

            {/* FORM CARD */}

            <div className="bg-white rounded-[32px] p-10 md:p-12 border border-[rgba(46,42,38,0.08)] shadow-sm">
              <h3 className="text-2xl text-[#2E2A26] mb-2">
                Tell Us About Your Project
              </h3>

              <p className="text-[#5F5A55] mb-10">
                Share a few details and we'll get back to you within 24 hours.
              </p>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="contact" />

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

{/* PURPOSE OF PROJECT */}
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
  onChange={(e) =>
    updateField("name", e.target.value)
  }
  placeholder="Full Name"
  autoComplete="name"
  maxLength={60}
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

<input
  type="email"
  name="email"
  required
  value={formData.email}
  onChange={(e) =>
    updateField("email", e.target.value)
  }
  placeholder="Email Address"
  autoComplete="email"
  maxLength={100}
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

<input
  type="tel"
  name="phone"
  required
  value={formData.phone}
  onChange={(e) =>
    updateField("phone", e.target.value)
  }
  placeholder="04XX XXX XXX"
  autoComplete="tel"
  maxLength={15}
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

 <select
  name="suburb"
  required
  value={formData.suburb}
  onChange={(e) =>
    updateField("suburb", e.target.value)
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
    focus:border-[#C7A77A]
    focus:bg-white
    outline-none
    transition-all
  "
>
  <option value="">
    Select suburb
  </option>

  {suburbs.map((suburb) => (
    <option key={suburb} value={suburb}>
      {suburb}
    </option>
  ))}
</select>

<input
  type="text"
  name="address"
  required
  value={formData.address}
  onChange={(e) =>
    updateField("address", e.target.value)
  }
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
                </div>

                {/* MESSAGE */}
<textarea
  name="message"
  rows={5}
  value={formData.message}
  onChange={(e) =>
    updateField("message", e.target.value)
  }
  placeholder="Tell us about your project..."
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
  <div className="bg-red-100 border border-red-300 text-red-700 px-5 py-4 rounded-2xl text-sm">
    {error}
  </div>
)}
                {/* BUTTON */}

                <div className="flex justify-end">
<button
  type="submit"
  disabled={loading}
  className="
    px-8
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
      <Loader2 size={18} className="animate-spin" />
      Sending...
    </>
  ) : (
    "Send Enquiry"
  )}
</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}

      <section className="bg-[#EFE8DF] py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-24">
            <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
              What Happens Next
            </span>

            <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6">
              A Simple Process,
              <br />
              Designed Around You
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Reach Out",
                text: "Tell us about your project, goals and ideas through our enquiry form.",
              },
              {
                number: "02",
                title: "Initial Consultation",
                text: "We'll discuss your space, requirements and answer any questions.",
              },
              {
                number: "03",
                title: "Design & Planning",
                text: "Our team develops a solution tailored to your property and lifestyle.",
              },
              {
                number: "04",
                title: "Bring It To Life",
                text: "Watch your backyard transform into a beautifully designed space.",
              },
            ].map((step) => (
              <div
                key={step.number}
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
                <div className="text-[#C7A77A] tracking-[0.3em] text-sm mb-6">
                  {step.number}
                </div>

                <h3 className="text-[#2E2A26] text-2xl mb-4">{step.title}</h3>

                <p className="text-[#5F5A55] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-white py-36">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
              Frequently Asked Questions
            </span>

            <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,5vw,5rem)] mt-6">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Timelines vary depending on the project scope, approvals and site conditions, but most projects move from design to completion within a few months.",
              },
              {
                question: "Do you only work in Melbourne?",
                answer:
                  "We primarily service Melbourne and surrounding areas, with select projects undertaken across Victoria.",
              },
              {
                question: "Can a granny flat be used as a rental property?",
                answer:
                  "Regulations vary by location. We can guide you through the options available for your property.",
              },
              {
                question: "Do I need council approval?",
                answer:
                  "Approval requirements depend on the size and type of structure. Our team can help identify the requirements for your site.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="
            group
            bg-[#F5F0EB]
            rounded-[24px]
            border border-[rgba(46,42,38,0.08)]
            p-6
          "
              >
                <summary className="cursor-pointer list-none flex justify-between items-center text-[#2E2A26] text-lg">
                  {item.question}

                  <span className="text-[#C7A77A] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 text-[#5F5A55] leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}

      <section className="bg-[#F5F0EB] py-36">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">
            {/* LEFT CONTENT */}

            <div>
              <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
                Visit Us
              </span>

              <h2 className="editorial-heading text-[#2E2A26] text-[clamp(2.5rem,4vw,4rem)] mt-6 leading-tight">
                Let's Talk About
                <br />
                Your Backyard Vision
              </h2>

              <p className="mt-8 text-[#5F5A55] leading-relaxed max-w-md">
                Whether you're planning a backyard studio, granny flat or
                flexible living space, we'd love to discuss your ideas and help
                bring your project to life.
              </p>

              <div className="mt-10 space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-[rgba(46,42,38,0.08)]">
                  <p className="text-[#A08E7C] text-xs uppercase tracking-[0.2em] mb-2">
                    Address
                  </p>

                  <p className="text-[#2E2A26] leading-relaxed">
                    Unit 8 / 21–35 Ricketts Road
                    <br />
                    Mount Waverley VIC 3149
                    <br />
                    Melbourne, Australia
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[rgba(46,42,38,0.08)]">
                  <p className="text-[#A08E7C] text-xs uppercase tracking-[0.2em] mb-2">
                    Office Hours
                  </p>

                  <p className="text-[#2E2A26]">
                    Monday – Friday
                    <br />
                    9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Unit+8+21-35+Ricketts+Road+Mount+Waverley+VIC"
                target="_blank"
                rel="noopener noreferrer"
                className="
            inline-flex items-center
            mt-8
            px-8 py-3
            bg-white
            border border-[rgba(46,42,38,0.08)]
            rounded-full
            text-[#5F5A55]
            transition-all duration-300
            hover:border-[#C7A77A]
            hover:text-[#2E2A26]
            hover:-translate-y-1
          "
              >
                Get Directions
              </a>
            </div>

            {/* MAP */}

            <div className="overflow-hidden rounded-[32px] border border-[rgba(46,42,38,0.08)] shadow-sm">
              <iframe
                title="Backyard Nest Location"
                src="https://maps.google.com/maps?q=21-35%20Ricketts%20Road%20Mount%20Waverley%20VIC&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[550px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#EFE8DF] py-40">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs">
            Ready To Get Started?
          </span>

          <h2 className="editorial-heading text-[#2E2A26] text-[clamp(3rem,6vw,6rem)] mt-8 leading-[0.95]">
            Let's Bring Your
            <br />
            Backyard Vision
            <br />
            To Life
          </h2>

          <p className="mt-8 text-[#5F5A55] text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're planning a studio, granny flat or flexible living
            space, we're here to help turn ideas into beautifully designed
            spaces that add value to everyday living.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <a
              href="/booking"
              className="
px-10 py-4
bg-white
border border-[rgba(46,42,38,0.08)]
text-[#5F5A55]
rounded-full
transition-all duration-300
hover:border-[#C7A77A]
hover:text-[#2E2A26]
hover:-translate-y-1
"
            >
              Request A Quote
            </a>

            <a
              href="tel:0390000000"
              className="
px-10 py-4
bg-transparent
text-[#A08E7C]
rounded-full
border border-[#C7A77A]/50
transition-all duration-300
hover:bg-[#C7A77A]/10
hover:border-[#C7A77A]
hover:text-[#2E2A26]
"
            >
              Call Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
