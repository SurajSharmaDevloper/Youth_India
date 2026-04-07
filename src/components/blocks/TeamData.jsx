import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Share2, Facebook, Twitter, Instagram } from "lucide-react";
import "swiper/css";
import SectionHeading from "./SectionHeading";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import UserIcon from "../../assets/userIcon.jpg";
import { Link, NavLink } from "react-router";

const team = [
  {
    id: "ShahAnsari",
    name: "N.A. Shah Ansari",
    role: "President",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "SatrughnaMuduli",
    name: "R. Sunanda Chowdhury",
    role: "General Secretary",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "RojalinPradhan",
    name: "Rojalin Pradhan",
    role: "Treasurer",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "DurgaPrasadTripathy",
    name: "Durga Prasad Tripathy",
    role: "Executive Committee Member",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "DillipKumarRout",
    name: "Dillip Kumar Rout",
    role: "Executive Committee Member",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "KrushidaBegum",
    name: "Krushida Begum",
    role: "Executive Committee Member",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "NarayanKhatua",
    name: "Narayan Khatua",
    role: "Executive Committee Member",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export default function TeamSection() {
  return (
    <div className="bg-blue-50/60 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex max-[650px]:flex-col max-[650px]:items-start justify-between items-end gap-2">
          <SectionHeading
            title="Executive "
            highlight="Committee"
            description="Our Executive Committee provides strategic leadership and governance, ensuring our organization operates with vision, integrity, and purpose."
            label="Our Committee Members"
          />
          <button className="text-primary text-sm border border-primary px-4 py-1.5 rounded-xl">
            <NavLink to="/members">View All</NavLink>
          </button>
        </div>

        <hr className="mb-8 mt-2" />

        <Swiper
          className="mx-auto "
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".custom-prev";
            swiper.params.navigation.nextEl = ".custom-next";
          }}
        >
          {team.map((item, i) => (
            <SwiperSlide key={i} className="h-auto m-0">
              <Link to={`/members/#${item.id}`} className="block h-full">
                <div className="h-full flex flex-col gap-3 group max-[600px]:w-[400px] max-[400px]:w-full m-0 bg-white border border-blue-100 p-3 rounded-2xl transition">
                  {/* IMAGE WRAPPER */}
                  <div className="relative rounded-xl border border-blue-100 overflow-hidden">
                    <img
                      src={UserIcon}
                      className="w-full h-80 max-[1350px]:h-64 max-[600px]:h-64 max-[400px]:h-64 object-cover rounded-xl"
                      alt=""
                    />

                    {/* SHARE BUTTON */}
                    <div className="absolute top-3 right-3 bg-accent text-white w-9 h-9 flex items-center justify-center rounded-full cursor-pointer z-10">
                      <Share2 size={16} />
                    </div>

                    {/* SOCIAL ICONS (HOVER) */}
                    <div className="absolute text-primary top-14 right-[14px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-300">
                      {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                        <div
                          key={idx}
                          className="bg-white w-8 h-8 flex items-center justify-center rounded-full shadow cursor-pointer"
                        >
                          <Icon size={14} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-3 rounded-xl text-center py-2.5 px-3 transition-all duration-300 bg-blue-100 group-hover:bg-[#0061b0] mt-auto">
                    <h3 className="font-bold text-xl text-primary group-hover:text-white truncate">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 group-hover:text-gray-200 truncate mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mt-10 flex justify-center"></div>
          <div className="flex items-center justify-center m-3 gap-2 ">
            {/* PREV BUTTON */}
            <button className="custom-prev w-10 h-10 rounded-full border border-blue-200 bg-primary text-white shadow flex items-center justify-center hover:text-blue-900  hover:border-primary hover:bg-white transition">
              ❮
            </button>

            {/* NEXT BUTTON */}
            <button className="custom-next w-10 h-10 rounded-full border border-blue-200 bg-primary text-white shadow flex items-center justify-center hover:text-blue-900  hover:border-primary hover:bg-white transition">
              ❯
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
