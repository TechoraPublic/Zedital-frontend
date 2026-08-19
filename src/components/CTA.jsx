import React, { useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // Yahan baad mein API / Email service connect kar sakte ho
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-transparent
        px-6
        py-24
        text-white
        sm:px-8
        lg:px-10
        lg:py-32
      "
    >
      {/* ==============================
          BACKGROUND GLOW
      =============================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-[10%]
            top-[20%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-white/[0.015]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-100px]
            right-[5%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-white/[0.02]
            blur-[120px]
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ==============================
            TOP LINE
        =============================== */}

        <div
          className="
            mb-16
            flex
            items-center
            justify-between
            border-b
            border-white/10
            pb-5
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-gray-500
            "
          >
            Have a project?
          </span>

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-gray-700
            "
          >
            Let's Create
          </span>
        </div>

        {/* ==============================
            MAIN GRID
        =============================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-[1fr_420px]
            lg:gap-24
          "
        >

          {/* ==========================
              LEFT CONTENT
          =========================== */}

          <div className="flex flex-col justify-between">

            <div>

              {/* Small Heading */}

              <div className="mb-8 flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-white" />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-gray-500
                  "
                >
                  Get In Touch
                </span>

              </div>

              {/* Main Heading */}

              <h2
                className="
                  text-[18vw]
                  font-black
                  uppercase
                  leading-[0.76]
                  tracking-[-0.08em]
                  sm:text-[14vw]
                  md:text-[12vw]
                  lg:text-[9vw]
                "
              >
                Let's
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-white
                    to-gray-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Talk
                </span>

                <span className="text-gray-700">
                  .
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mt-10
                  max-w-[520px]
                  text-base
                  leading-7
                  text-gray-500
                  sm:text-lg
                "
              >
                Have an idea, a challenge, or a project in mind?
                Let's turn it into something meaningful, memorable,
                and built to make an impact.
              </p>

            </div>

            {/* ==========================
                CONTACT DETAILS
            =========================== */}

            <div className="mt-16 lg:mt-24">

              <div
                className="
                  mb-6
                  h-[1px]
                  w-full
                  bg-white/10
                "
              />

              <div
                className="
                  flex
                  flex-col
                  justify-between
                  gap-6
                  sm:flex-row
                  sm:items-end
                "
              >

                <div>

                  <p
                    className="
                      mb-2
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-gray-600
                    "
                  >
                    Email
                  </p>

                  <a
                    href="mailto:hello@example.com"
                    className="
                      text-sm
                      text-white
                      transition-colors
                      hover:text-gray-400
                    "
                  >
                    hello@example.com
                  </a>

                </div>

                <div>

                  <p
                    className="
                      mb-2
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-gray-600
                    "
                  >
                    Let's Connect
                  </p>

                  <span
                    className="
                      text-sm
                      text-gray-500
                    "
                  >
                    India · Worldwide
                  </span>

                </div>

              </div>
            </div>

          </div>

          {/* ==========================
              FORM
          =========================== */}

          <div
            className="
              rounded-[28px]
              border
              border-white/10

              /* TRANSPARENT / GLASS */
              bg-white/[0.025]
              backdrop-blur-[3px]

              p-7
              sm:p-9

              transition-all
              duration-500
              hover:border-white/20
              hover:bg-white/[0.035]
            "
          >

            {/* Form Header */}

            <div className="mb-9">

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-gray-600
                "
              >
                Start a conversation
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-medium
                  tracking-tight
                "
              >
                Tell us about your project.
              </h3>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* NAME */}

              <div className="group">

                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-gray-600
                    transition-colors
                    group-focus-within:text-white
                  "
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    border-b
                    border-white/10
                    bg-transparent
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-700
                    transition-colors
                    focus:border-white
                  "
                />

              </div>

              {/* EMAIL */}

              <div className="group">

                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-gray-600
                    transition-colors
                    group-focus-within:text-white
                  "
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    border-b
                    border-white/10
                    bg-transparent
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-700
                    transition-colors
                    focus:border-white
                  "
                />

              </div>

              {/* MESSAGE */}

              <div className="group">

                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-gray-600
                    transition-colors
                    group-focus-within:text-white
                  "
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us a little about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    resize-none
                    border-b
                    border-white/10
                    bg-transparent
                    py-3
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-gray-700
                    transition-colors
                    focus:border-white
                  "
                />

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  group
                  flex
                  h-14
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  bg-white
                  px-6
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:bg-gray-300
                "
              >

                <span>
                  Send Inquiry
                </span>

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </button>

            </form>

            {/* Privacy */}

            <p
              className="
                mt-6
                text-center
                text-[10px]
                leading-5
                text-gray-700
              "
            >
              We respect your privacy. Your information will
              never be shared.
            </p>

          </div>

        </div>

        {/* ==============================
            BOTTOM
        =============================== */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-gray-700
            "
          >
            From Ideas To Impact
          </span>

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-gray-700
            "
          >
            © 2026
          </span>

        </div>

      </div>
    </section>
  );
};

export default CTA;