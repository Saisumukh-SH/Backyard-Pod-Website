import { useState } from "react";
import { MessageCircle, Loader2, CheckCircle2 } from "lucide-react";

interface EnquiryFormProps {
  className?: string;
  formName?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  address: string;
  projectType: string;
  studioModel: string;
  grannyModel: string;
   purpose: string;
  message: string;
}

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

const projectTypes = [
  "Studio",
  "Granny Flat",
];

export default function EnquiryForm({
  className = "",
  formName = "consultation",
}: EnquiryFormProps) {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    address: "",
    projectType: "",
    studioModel: "",
    grannyModel: "",
    purpose: "",
    message: "",
  });

  const updateField = (
    field: keyof FormData,
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

  const phoneRegex =
    /^(\+61|0)[2-9]\d{8}$/;

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameRegex =
    /^[A-Za-zÀ-ÿ' -]{2,60}$/;



  const validateForm = () => {
    const secondsOnPage = (Date.now() - formLoadedAt) / 1000;

if (secondsOnPage < 5) {
  setError("Please take a moment to complete the form before submitting.");
  return false;
}
  if (!nameRegex.test(formData.name.trim())) {
    setError("Please enter a valid name.");
    return false;
  }
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

const linkCount =
  (formData.message.match(/https?:\/\//gi) || []).length +
  (formData.message.match(/www\./gi) || []).length;

if (linkCount > 1) {
  setError("Please remove links from your message.");
  return false;
}

if (
  fakeNames.includes(formData.name.trim().toLowerCase())
) {
  setError("Please enter your real name.");
  return false;
}

  if (!phoneRegex.test(formData.phone.trim())) {
    setError("Please enter a valid Australian phone number.");
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

const addressRegex = /^\d+.*$/;

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
  setError("Please select the purpose of your project.");
  return false;
}

if (formData.message.trim().length > 1500) {
  setError("Message is too long.");
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

if (formData.message.trim().length < 10) {
  setError("Please tell us a little more about your project.");
  return false;
}

  // Simple spam protection
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

  const combined = (
    formData.name +
    formData.email +
    formData.message
  ).toLowerCase();

  if (
    spamWords.some((word) => combined.includes(word))
  ) {
    setError("Spam detected.");
    return false;
  }

  setError("");
  return true;
};

const resetForm = () => {
  setFormData({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    address: "",
    projectType: "",
    studioModel: "",
    grannyModel: "",
    purpose: "",
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
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: encode({
    "form-name": formName,
    ...formData,
  }),
});

if (!response.ok) {
  throw new Error("Submission failed");
}

    setSuccess(true);

    resetForm();
  } catch (err) {
    setError(
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

const sendWhatsApp = () => {
  if (!validateForm()) return;

  const message = `Hi Backyard Nest!

Name:
${formData.name}

Phone:
${formData.phone}

Email:
${formData.email}

Suburb:
${formData.suburb}

Property Address:
${formData.address}

Project Type:
${formData.projectType}

Model:
${
  formData.projectType === "Studio"
    ? formData.studioModel
    : formData.grannyModel
}

Purpose:
${formData.purpose}

Message:
${formData.message}`;

  window.open(
    `https://wa.me/61466333438?text=${encodeURIComponent(
      message
    )}`,
    "_blank"
  );
};

const [formLoadedAt] = useState(Date.now());



return (
  <>
    {success ? (
      <div
        className={`bg-[#1C1B19] text-white p-10 rounded-sm text-center ${className}`}
      >
        <CheckCircle2
          size={70}
          className="mx-auto text-[#4B5D45] mb-6"
        />

        <h2 className="font-serif text-4xl mb-4">
          Thank You!
        </h2>

        <p className="text-neutral-300 leading-8 max-w-md mx-auto">
          We've received your enquiry and one of our
          design consultants will contact you within
          one business day.
        </p>

        <button
          onClick={() => setSuccess(false)}
          className="mt-10 bg-white text-[#1C1B19] hover:bg-[#8B5A3C] hover:text-white transition px-8 py-4 font-semibold"
        >
          Send Another Enquiry
        </button>
      </div>
    ) : (
      <form
        name={formName}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={`space-y-6 ${className}`}
      >
        {/* Netlify */}

        <input
          type="hidden"
          name="form-name"
          value={formName}
        />

        <p hidden>
          <label>
            Don't fill this out:
            <input name="bot-field" />
          </label>
        </p>

        {/* Name & Phone */}

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">

              Name

            </label>

            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                updateField("name", e.target.value)
              }
              placeholder="Your Name"
              className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"
            />

          </div>

          <div>

            <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">

              Phone

            </label>

            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                updateField("phone", e.target.value)
              }
              placeholder="04XX XXX XXX"
              className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"
            />

          </div>

        </div>

        {/* Email & Suburb */}

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">

              Email

            </label>

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
              placeholder="you@email.com"
              className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"
            />

          </div>

          <div>

            <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">

              Suburb

            </label>

            <select
              required
              name="suburb"
              value={formData.suburb}
              onChange={(e) =>
                updateField("suburb", e.target.value)
              }
              className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition"
            >
              <option value="">

                Select suburb

              </option>

              {suburbs.map((suburb) => (

                <option
                  key={suburb}
                  value={suburb}
                >
                  {suburb}
                </option>

              ))}

            </select>

          </div>

        </div>
        {/* PROPERTY ADDRESS */}

<div>

  <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">
    Property Address
  </label>

  <input
    required
    type="text"
    name="address"
    value={formData.address}
    onChange={(e) => updateField("address", e.target.value)}
    placeholder="123 Example Street, Brighton VIC 3186"
    autoComplete="street-address"
    className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"
  />

</div>

        {/* Project */}

        <div>

          <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">

            Project Type

          </label>

          <select
            required
            name="projectType"
            value={formData.projectType}
            onChange={(e) =>
              updateField(
                "projectType",
                e.target.value
              )
            }
            className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition"
          >
            <option value="">

              Select project

            </option>

            {projectTypes.map((project) => (

              <option
                key={project}
                value={project}
              >
                {project}
              </option>

            ))}

          </select>

        </div>

        {/* MODEL SELECTION */}

          {formData.projectType === "Studio" && (

            <div>

              <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">
                Studio Model
              </label>

              <select
                required
                name="studioModel"
                value={formData.studioModel}
                onChange={(e) => updateField("studioModel", e.target.value)}
                className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition"
              >
                <option value="">
                  Select Studio Model
                </option>

                <option value="The Vista">The Vista</option>
                <option value="The Brighton">The Brighton</option>
                <option value="The Aspen">The Aspen</option>
                <option value="The Nest">The Nest</option>
              </select>

            </div>

          )}

          {formData.projectType === "Granny Flat" && (

            <div>

              <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">
                Granny Flat Model
              </label>

              <select
                required
                name="grannyModel"
                value={formData.grannyModel}
                onChange={(e) => updateField("grannyModel", e.target.value)}
                className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition"
              >
                <option value="">
                  Select Granny Flat Model
                </option>

                <option value="1 Bedroom Granny Flat">
                  1 Bedroom Granny Flat
                </option>

                <option value="2 Bedroom Granny Flat">
                  2 Bedroom Granny Flat
                </option>

                <option value="Custom Granny Flat">
                  Custom Granny Flat
                </option>

              </select>

            </div>

          )}

          {/* PURPOSE OF STUDIO */}

<div>

  <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">
    Purpose of Your Project
  </label>

  <select
    required
    name="purpose"
    value={formData.purpose}
    onChange={(e) => updateField("purpose", e.target.value)}
    className="w-full bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white focus:border-[#C7A77A] transition"
  >
    <option value="">Select purpose</option>

    <option value="Home Office">Home Office</option>
    <option value="Extra Living Space">Extra Living Space</option>
    <option value="Rental Income">Rental Income</option>
    <option value="Guest Accommodation">Guest Accommodation</option>
    <option value="Teenage Retreat">Teenage Retreat</option>
    <option value="Not Sure Yet">Not Sure Yet</option>

  </select>

</div>

        {/* Message */}

        <div>

          <label className="block text-xs uppercase tracking-[3px] text-[#C7A77A] mb-3">

            Message

          </label>

          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={(e) =>
              updateField(
                "message",
                e.target.value
              )
            }
            placeholder="Tell us a little about your project..."
            className="w-full resize-none bg-[#1C1B19] border border-white/10 px-5 py-4 outline-none text-white placeholder:text-neutral-500 focus:border-[#C7A77A] transition"
          />

        </div>

        {/* Error */}

        {error && (

          <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-sm text-sm">

            {error}

          </div>

        )}

        {/* Buttons */}

        <div className="grid md:grid-cols-2 gap-4">

          <button
            type="submit"
            disabled={loading}
            className="bg-[#1C1B19] hover:bg-[#8B5A3C] hover:text-white transition font-semibold py-4 flex justify-center items-center gap-3 disabled:opacity-60"
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
              "Email My Enquiry"
            )}

          </button>

          <button
            type="button"
            onClick={sendWhatsApp}
            className="bg-[#4B5D45] hover:bg-[#3D4C38] transition text-white font-semibold py-4 flex justify-center items-center gap-3"
          >

            <MessageCircle size={20} />

            Send via WhatsApp

          </button>

        </div>

        <p className="text-center text-xs text-neutral-400 leading-6">

          By submitting this form you agree to our
          Privacy Policy. We never share your
          information with third parties.

        </p>

      </form>
    )}
    
  </>
);}