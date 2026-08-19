import { useRef, useState } from "react";

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const blogs = [
  {
    id: 1,
    title:
      "Working with Zeditlal Media has been a game-changer for Satmola.",
    description:
      "Zaid and his team don’t just deliver marketing—they craft strategies that truly connect with our audience and drive tangible growth. Their creativity, professionalism, and results-driven approach make them an indispensable partner for any brand looking to scale.",
    author: "NAVANSH MITTAL",
    role: "Founder: Satmola",
    image: "/images/navansh.jpg",
  },

  {
    id: 2,
    title: "Zeditlal Media transformed our marketing strategy.",
    description:
      "Zaid and his team brought creativity, strategy, and execution together in a way that delivered measurable results. Their innovative approach helped Holiday Homes strengthen its digital presence and connect with audiences in ways we never expected.",
    author: "VINAYAK MA...",
    role: "Founder: BnBMe",
    image: "/images/vinayak.jpg",
  },

  {
    id: 3,
    title: "Healthcare needs to communicate with clarity and trust.",
    description:
      "Zeditlal Media's innovative approach has massively amplified our brand visibility and helped shape a stronger public perception. Their team understands how to communicate with audiences effectively.",
    author: "AMAN DHAAR",
    role: "Healthcare Founder",
    image: "/images/aman.jpg",
  },

  {
    id: 4,
    title: "They helped us build a brand people actually remember.",
    description:
      "From strategy to execution, Zeditlal Media understands how to turn ideas into campaigns that people remember. Their strategic thinking and creative execution helped our brand achieve remarkable growth.",
    author: "RAHUL SHARMA",
    role: "CEO: GrowthCo",
    image: "/images/rahul.jpg",
  },

  {
    id: 5,
    title: "Creative ideas that actually deliver business results.",
    description:
      "The team understands our audience, challenges conventional thinking, and consistently delivers creative work that performs. Their combination of strategy and creativity has made a real difference.",
    author: "PRIYA MEHTA",
    role: "Marketing Director",
    image: "/images/priya.jpg",
  },
];

/* =========================================================
   STARS
========================================================= */

function Stars() {
  return (
    <div className="flex items-center gap-1 text-lg leading-none text-white">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function BlogCard({ blog }) {
  return (
    <article
      className="
        group
        relative
        flex
        h-[430px]
        w-[405px]
        min-w-[405px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-white/10

        /* TRANSPARENT CARD */
        bg-white/[0.02]

        p-7
        text-white
        backdrop-blur-[2px]

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-white/25
        hover:bg-white/[0.04]

        max-md:h-auto
        max-md:min-h-[430px]
        max-md:w-[calc(100vw-40px)]
        max-md:min-w-[calc(100vw-40px)]
        max-md:p-6
      "
    >
      {/* =====================================================
          TOP ROW
      ====================================================== */}

      <div className="flex items-center justify-between">
        <Stars />

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          0{blog.id}
        </span>
      </div>

      {/* =====================================================
          QUOTE
      ====================================================== */}

      <div
        className="
          mt-4
          h-8
          font-serif
          text-[46px]
          leading-8
          text-white/10
        "
      >
        &ldquo;
      </div>

      {/* =====================================================
          TITLE
      ====================================================== */}

      <h3
        className="
          mt-3
          text-[16px]
          font-medium
          leading-[1.45]
          text-white
        "
      >
        {blog.title}
      </h3>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <p
        className="
          mt-3
          line-clamp-6
          text-[14px]
          leading-[1.6]
          text-gray-500
        "
      >
        {blog.description}
      </p>

      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <div className="mt-auto pt-6">
        <div className="flex items-center gap-4">

          {/* Author Image */}

          <div
            className="
              h-14
              w-14
              flex-shrink-0
              overflow-hidden
              rounded-full
              border
              border-white/10

              /* TRANSPARENT IMAGE BACKGROUND */
              bg-white/[0.03]
            "
          >
            <img
              src={blog.image}
              alt={blog.author}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />
          </div>

          {/* Author Info */}

          <div className="min-w-0">
            <h4
              className="
                truncate
                text-[14px]
                font-medium
                uppercase
                tracking-wide
                text-white
              "
            >
              {blog.author}
            </h4>

            <p
              className="
                mt-1
                truncate
                text-[11px]
                uppercase
                tracking-[0.12em]
                text-gray-600
              "
            >
              {blog.role}
            </p>
          </div>
        </div>

        {/* Read More */}

        <button
          type="button"
          className="
            mt-5
            flex
            items-center
            gap-2
            text-[11px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-gray-500
            transition-all
            duration-300
            group-hover:text-white
          "
        >
          Read More

          <span
            className="
              text-base
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>
      </div>

      {/* =====================================================
          HOVER LINE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-white
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </article>
  );
}

/* =========================================================
   LEFT INTRO
========================================================= */

function ReviewIntro() {
  return (
    <div
      className="
        relative
        hidden
        h-[430px]
        w-[445px]
        min-w-[445px]
        overflow-hidden
        lg:block
      "
    >
      {/* =====================================================
          PERSON IMAGE
      ====================================================== */}

      <div className="absolute left-0 top-5 z-10">

        <img
          src="/images/testimonial-person.png"
          alt="Client testimonial"
          className="
            h-auto
            w-[425px]
            object-contain
          "
        />

        {/* Play Button */}

        <button
          type="button"
          aria-label="Play client stories"
          className="
            absolute
            left-[168px]
            top-[87px]
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white
            text-black
            shadow-[0_0_0_7px_rgba(255,255,255,0.08)]
            transition-all
            duration-300
            hover:scale-110
          "
        >
          <span
            className="
              ml-1
              h-0
              w-0
              border-y-[9px]
              border-l-[14px]
              border-y-transparent
              border-l-black
            "
          />
        </button>
      </div>

      {/* =====================================================
          BOTTOM CARD
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-[102px]
          z-20
          flex
          h-[105px]
          w-[330px]
          items-center
          justify-between
          rounded-[24px]

          /* LIGHT CARD IS KEPT */
          border
          border-black/10
          bg-white

          px-5
        "
      >
        <div>
          <p className="text-[17px] font-medium uppercase text-black">
            See More Reviews?
          </p>

          <p className="mt-2 text-[13px] text-gray-500">
            Our Client Stories
          </p>
        </div>

        <button
          type="button"
          aria-label="See more reviews"
          className="
            flex
            h-10
            w-10
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            bg-black
            text-lg
            text-white
            transition-all
            duration-300
            hover:bg-gray-700
            hover:scale-110
          "
        >
          →
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN TESTIMONIAL SECTION
========================================================= */

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  /* =====================================================
     GO TO SLIDE
  ====================================================== */

  const goToSlide = (index) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.children[index];

    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActive(index);
  };

  /* =====================================================
     NEXT
  ====================================================== */

  const nextSlide = () => {
    const next =
      active === blogs.length - 1
        ? 0
        : active + 1;

    goToSlide(next);
  };

  /* =====================================================
     PREVIOUS
  ====================================================== */

  const previousSlide = () => {
    const previous =
      active === 0
        ? blogs.length - 1
        : active - 1;

    goToSlide(previous);
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden

        /* =========================================
           TRANSPARENT MAIN BACKGROUND
        ========================================== */
        bg-transparent

        px-5
        py-24
        text-white

        sm:px-8
        lg:px-10
        lg:py-32
      "
    >

      {/* =====================================================
          SUBTLE BACKGROUND GLOW
      ====================================================== */}

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
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            right-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-white/[0.01]
            blur-[120px]
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mb-16
            border-b
            border-white/10
            pb-10
          "
        >

          {/* Eyebrow */}

          <div className="mb-7 flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-white" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-gray-500
              "
            >
              Testimonials
            </span>

          </div>

          {/* Heading */}

          <div
            className="
              flex
              flex-col
              justify-between
              gap-8
              lg:flex-row
              lg:items-end
            "
          >

            <h2
              className="
                text-[13vw]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.07em]
                md:text-[10vw]
                lg:text-[7vw]
              "
            >
              What
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-white
                  to-gray-500
                  bg-clip-text
                  font-serif
                  italic
                  text-transparent
                "
              >
                They Say
              </span>

              <span className="text-gray-700">
                .
              </span>

            </h2>

            <p
              className="
                max-w-[340px]
                text-sm
                leading-6
                text-gray-500
                lg:mb-2
              "
            >
              Real stories from brands and people
              we've helped turn ideas into meaningful
              growth.
            </p>

          </div>
        </div>

        {/* =====================================================
            MAIN AREA
        ====================================================== */}

        <div
          className="
            flex
            items-center
            gap-10
            lg:gap-12
          "
        >

          {/* LEFT INTRO */}

          <ReviewIntro />

          {/* =================================================
              CAROUSEL
          ================================================= */}

          <div className="min-w-0 flex-1">

            <div
              ref={sliderRef}
              className="
                flex
                gap-4
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory
                pb-3

                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden

                max-lg:px-1
              "
            >

              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="
                    flex-none
                    snap-start
                  "
                >
                  <BlogCard blog={blog} />
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* =====================================================
            CONTROLS
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-7
          "
        >

          {/* Progress */}

          <div className="flex items-center gap-4">

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-gray-600
              "
            >
              Client Stories
            </span>

            <div
              className="
                hidden
                h-[1px]
                w-32
                bg-white/10
                sm:block
              "
            >

              <div
                className="
                  h-full
                  bg-white
                  transition-all
                  duration-500
                "
                style={{
                  width: `${
                    ((active + 1) / blogs.length) * 100
                  }%`,
                }}
              />

            </div>

            <span
              className="
                text-[10px]
                tracking-[0.2em]
                text-white/40
              "
            >
              0{active + 1} / 0{blogs.length}
            </span>

          </div>

          {/* Desktop Arrows */}

          <div className="hidden items-center gap-2 lg:flex">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous review"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white/50
                transition-all
                duration-300

                hover:border-white
                hover:bg-white
                hover:text-black
              "
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next review"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                transition-all
                duration-300

                hover:bg-gray-300
              "
            >
              →
            </button>

          </div>
        </div>

        {/* =====================================================
            DOTS
        ====================================================== */}

        <div className="mt-8 flex items-center justify-center gap-3">

          {blogs.map((blog, index) => (
            <button
              key={blog.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`
                rounded-full
                transition-all
                duration-300

                ${
                  active === index
                    ? "h-2 w-8 bg-white"
                    : "h-2 w-2 bg-white/20 hover:bg-white/50"
                }
              `}
            />
          ))}

        </div>

        {/* =====================================================
            MOBILE ARROWS
        ====================================================== */}

        <div className="mt-7 flex justify-center gap-3 lg:hidden">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous review"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              text-white
              transition-all

              hover:border-white
              hover:bg-white
              hover:text-black
            "
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next review"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-black
              transition-all

              hover:bg-gray-300
            "
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}