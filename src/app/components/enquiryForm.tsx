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
  projectType: string;
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
  "Backyard Studio",
  "Granny Flat",
  "Office Pod",
  "Home Office",
  "Guest House",
  "Gym",
  "Airbnb",
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
    projectType: "",
    message: "",
  });

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const phoneRegex =
    /^(\+61|0)[2-9]\d{8}$/;

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameRegex =
    /^[A-Za-zÀ-ÿ' -]{2,60}$/;

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
  const validateForm = () => {
  if (!nameRegex.test(formData.name.trim())) {
    setError("Please enter a valid name.");
    return false;
  }

  if (!phoneRegex.test(formData.phone.trim())) {
    setError("Please enter a valid Australian phone number.");
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

  if (!formData.projectType) {
    setError("Please select a project type.");
    return false;
  }

  // Simple spam protection
  const spamWords = [
    "seo",
    "casino",
    "crypto",
    "bitcoin",
    "loan",
    "viagra",
    "forex",
    "http://",
    "https://",
    "www.",
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
    projectType: "",
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

Project Type:
${formData.projectType}

Message:
${formData.message}`;

  window.open(
    `https://wa.me/61466333438?text=${encodeURIComponent(
      message
    )}`,
    "_blank"
  );
};
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
              placeholder="John Smith"
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