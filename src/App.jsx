import "./App.css";
import { Home, Smartphone, Wifi, PhoneCall } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaCaretUp,
  FaFacebookMessenger,
  FaFileContract,
  FaPhone,
  FaShippingFast,
} from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { GiStabbedNote } from "react-icons/gi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const images = [
  "https://w.ladicdn.com/s700x700/61437b48d1330500bc4f9128/nhe2-20220223031005.png",
  "https://w.ladicdn.com/s700x700/61437b48d1330500bc4f9128/nhe3-20220223031005.png",
  "https://w.ladicdn.com/s700x700/61437b48d1330500bc4f9128/nhe1-20220223031004.png",
];
const imagesFeedBack = [
  "https://w.ladicdn.com/s550x750/61437b48d1330500bc4f9128/z5430310234923_77be55bcc8ef6a7f5c38d0dde5b19f96-20240511112427-cbc82.jpg",
  "https://w.ladicdn.com/s550x750/61437b48d1330500bc4f9128/z5430310235448_258a20674ccf59267d0f46dca4471285-20240511112427-ahqbs.jpg",
  "https://w.ladicdn.com/s550x750/61437b48d1330500bc4f9128/z5430310225088_ce00ed0dea1b3ecad4645c27ae1c93c5-20240511112546-yrdol.jpg",
  "https://w.ladicdn.com/s550x750/61437b48d1330500bc4f9128/z5430310234923_77be55bcc8ef6a7f5c38d0dde5b19f96-20240511112427-cbc82.jpg",
  "https://w.ladicdn.com/s550x750/61437b48d1330500bc4f9128/z5430310235448_258a20674ccf59267d0f46dca4471285-20240511112427-ahqbs.jpg",
  "https://w.ladicdn.com/s550x750/61437b48d1330500bc4f9128/z5430310225088_ce00ed0dea1b3ecad4645c27ae1c93c5-20240511112546-yrdol.jpg",
];
const simData = [
  {
    title: "Sim data 100GB FULL",
    description:
      "Gói cước: 100GB/Tháng - Đóng cước là dùng - Kích hoạt nghe gọi + SMS",
    price: "2950¥/Tháng",
    image:
      "https://w.ladicdn.com/s550x450/61437b48d1330500bc4f9128/simsnp-20220223034213.png",
    highlight: "100GB FULL",
  },
  {
    title: "Sim data 50GB nhỏ mà có võ",
    description:
      "Gói cước: 50GB/Tháng - Đóng cước là dùng - Kích hoạt nghe gọi + SMS",
    price: "2350¥/Tháng",
    image:
      "https://w.ladicdn.com/s550x450/61437b48d1330500bc4f9128/simsnp-20220223034213.png",
    highlight: "50GB",
  },
  {
    id: 3,
    title: "Sim data 200GB VIP",
    description: "Gói cước: 200GB/Tháng - Dùng không giới hạn - Hỗ trợ quốc tế",
    price: "3990¥/Tháng",
    image:
      "https://w.ladicdn.com/s550x450/61437b48d1330500bc4f9128/simsnp-20220223034213.png",
  },
  {
    id: 4,
    title: "Sim data 200GB VIP",
    description: "Gói cước: 200GB/Tháng - Dùng không giới hạn - Hỗ trợ quốc tế",
    price: "3990¥/Tháng",
    image:
      "https://w.ladicdn.com/s550x450/61437b48d1330500bc4f9128/simsnp-20220223034213.png",
  },
  {
    id: 5,
    title: "Sim data 200GB VIP",
    description: "Gói cước: 200GB/Tháng - Dùng không giới hạn - Hỗ trợ quốc tế",
    price: "3990¥/Tháng",
    image:
      "https://w.ladicdn.com/s550x450/61437b48d1330500bc4f9128/simsnp-20220223034213.png",
  },
];
const urlmesseger = "https://m.me/duongbkt"
const FloatingMessenger = () => {
  return (
    <a
      href={urlmesseger}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
    >
      <FaFacebookMessenger className="text-3xl" />{" "}
      <span className="px-3">Tư vấn ngay</span>
    </a>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FloatingMessenger />
      <div className="bg-[#00a277] w-full fixed z-50">
        <div className="w-[1200px] mx-auto max-sm:w-full px-3 max-sm:px-2">
          <nav className=" text-white py-3 w-full">
            <div className="flex justify-center gap-15 text-sm max-sm:gap-2">
              {/* NavHome */}
              <a href="#">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <Home size={20} />
                  <span className="font-semibold">Trang chủ</span>
                </div>
              </a>

              {/* Sim Data */}
              <div
                className="flex items-center space-x-1 cursor-pointer relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Smartphone size={20} />
                <span className="font-semibold">Sim Data</span>
                {isOpen && (
                  <div className="absolute top-10 left-0 bg-white shadow-xl rounded-lg p-4 w-48 z-10">
                    {/* Mũi tên lên */}
                    <FaCaretUp className="text-[#00a277] text-2xl absolute top-1 left-6" />

                    {/* Nút đóng */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-2 right-1 text-black cursor-pointer"
                    >
                      <IoCloseSharp size={20} />
                    </button>

                    {/* Danh sách menu */}
                    <ul className="space-y-3 mt-4">
                      <a href="#box1">
                        <li className="hover:bg-orange-500 transition-all hover:scale-90 bg-[#00a277] text-white text-center py-2 rounded-full font-semibold cursor-pointer my-2">
                          Sim SB mua đứt
                        </li>
                      </a>
                      <a href="#box2">
                        <li className="hover:bg-orange-500 transition-all hover:scale-90 bg-[#00a277] text-white text-center py-2 rounded-full font-bold cursor-pointer my-2">
                          SIM SB đóng cước
                        </li>
                      </a>
                      <a href="#box3">
                        <li className="hover:bg-orange-500 transition-all hover:scale-90 bg-[#00a277] text-white text-center py-2 rounded-full font-semibold cursor-pointer my-2">
                          Sim Docomo
                        </li>
                      </a>
                    </ul>
                  </div>
                )}
              </div>

              {/* Wifi Cầm Tay */}
              <a href="#box4">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <Wifi size={20} />
                  <span className="font-semibold">Wifi cầm tay</span>
                </div>
              </a>

              {/* Hỗ Trợ */}
              <a href={urlmesseger}>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <PhoneCall size={20} />
                  <span className="font-semibold">Hỗ trợ</span>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* banner */}
      <div className="w-full mx-auto max-sm:w-full bg-gray-200 p-3 pt-12">
        <div className="w-[1220px] max-sm:w-full mx-auto">
          <div className="bg-white rounded-2xl p-3">
            <div className="banner w-full ">
              <img
                className="w-full "
                src="https://w.ladicdn.com/s700x600/61437b48d1330500bc4f9128/nhe-20220223033559.png"
                alt=""
              />
            </div>
            <div className="my-5">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={false}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="overflow-hidden"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={src}
                      alt={`Slide ${index}`}
                      className="w-full h-96 object-cover max-sm:h-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* sim data không phí đăng kí */}
      <div id="box1" className="w-full mx-auto max-sm:w-full bg-gray-200 p-3">
        <div className="bg-white rounded-2xl p-3 w-[1220px] max-sm:w-full mx-auto">
          <div className="my-5">
            <h2 className="text-3xl font-bold text-[#00a277] text-center mb-6">
              SIM DATA KHÔNG PHÍ ĐĂNG KÍ
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={false}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="rounded-lg"
            >
              {simData.map((sim, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-white p-4 border-2 border-[#00a277] rounded-xl shadow-lg min-h-[400px] min-h-[400px]"
                >
                  <img
                    src={sim.image}
                    alt={sim.title}
                    className="w-full object-cover"
                  />
                  <h3 className="font-bold text-lg text-gray-800">
                    {sim.title}
                  </h3>
                  <p className="text-gray-600">{sim.description}</p>
                  <div className="mt-3">
                    <span className="text-white font-bold bg-linear-to-t from-[#00d59d] to-[#00a277] px-3 py-1 rounded-md">
                      Chỉ {sim.price}
                    </span>
                  </div>
                  <a href={urlmesseger}>
                    <button className="button-buy cursor-pointer mt-4 w-full bg-linear-90 from-[#e52d27] to-[#b31217] text-white font-bold py-2 rounded-3xl transition">
                      LIÊN HỆ MUA NGAY
                    </button>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>{" "}
        </div>
      </div>
      {/* sim data SB */}
      <div id="box2" className="w-full mx-auto max-sm:w-full bg-gray-200 p-3">
        <div className="bg-white rounded-2xl p-3 w-[1220px] max-sm:w-full mx-auto">
          <div className="my-5">
            <h2 className="text-3xl font-bold text-[#00a277] text-center mb-6">
              SIM DATA SB
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={false}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="rounded-lg"
            >
              {simData.map((sim, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-white p-4 border-2 border-[#00a277] rounded-xl shadow-lg min-h-[400px]"
                >
                  <img
                    src={sim.image}
                    alt={sim.title}
                    className="w-full object-cover"
                  />
                  <h3 className="font-bold text-lg text-gray-800">
                    {sim.title}
                  </h3>
                  <p className="text-gray-600">{sim.description}</p>
                  <div className="mt-3">
                    <span className="text-white font-bold bg-linear-to-t from-[#00d59d] to-[#00a277] px-3 py-1 rounded-md">
                      Chỉ {sim.price}
                    </span>
                  </div>
                  <a href={urlmesseger}>
                    <button className="button-buy cursor-pointer mt-4 w-full bg-linear-90 from-[#e52d27] to-[#b31217] text-white font-bold py-2 rounded-3xl transition">
                      LIÊN HỆ MUA NGAY
                    </button>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>{" "}
        </div>
      </div>

      {/* sim data DCM */}
      <div id="box3" className="w-full mx-auto max-sm:w-full bg-gray-200 p-3">
        <div className="bg-white rounded-2xl p-3 w-[1220px] max-sm:w-full mx-auto">
          <div className="my-5">
            <h2 className="text-3xl font-bold text-[#00a277] text-center mb-6">
              SIM DATA DCM
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={false}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="rounded-lg"
            >
              {simData.map((sim, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-white p-4 border-2 border-[#00a277] rounded-xl shadow-lg min-h-[400px]"
                >
                  <img
                    src={sim.image}
                    alt={sim.title}
                    className="w-full object-cover"
                  />
                  <h3 className="font-bold text-lg text-gray-800">
                    {sim.title}
                  </h3>
                  <p className="text-gray-600">{sim.description}</p>
                  <div className="mt-3">
                    <span className="text-white font-bold bg-linear-to-t from-[#00d59d] to-[#00a277] px-3 py-1 rounded-md">
                      Chỉ {sim.price}
                    </span>
                  </div>
                  <a href={urlmesseger}>
                    <button className="button-buy cursor-pointer mt-4 w-full bg-linear-90 from-[#e52d27] to-[#b31217] text-white font-bold py-2 rounded-3xl transition">
                      LIÊN HỆ MUA NGAY
                    </button>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>{" "}
        </div>
      </div>

      {/* wifi cầm tay */}
      <div id="box4" className="w-full mx-auto max-sm:w-full bg-gray-200 p-3">
        <div className="bg-white rounded-2xl p-3 w-[1220px] max-sm:w-full mx-auto">
          <div className="my-5">
            <h2 className="text-3xl uppercase font-bold text-[#00a277] text-center mb-6">
              wifi cầm tay
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={false}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="rounded-lg"
            >
              {simData.map((sim, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-white p-4 border-2 border-[#00a277] rounded-xl shadow-lg min-h-[400px]"
                >
                  <img
                    src={sim.image}
                    alt={sim.title}
                    className="w-full object-cover"
                  />
                  <h3 className="font-bold text-lg text-gray-800">
                    {sim.title}
                  </h3>
                  <p className="text-gray-600">{sim.description}</p>
                  <div className="mt-3">
                    <span className="text-white font-bold bg-linear-to-t from-[#00d59d] to-[#00a277] px-3 py-1 rounded-md">
                      Chỉ {sim.price}
                    </span>
                  </div>
                  <a href={urlmesseger}>
                    <button className="button-buy cursor-pointer mt-4 w-full bg-linear-90 from-[#e52d27] to-[#b31217] text-white font-bold py-2 rounded-3xl transition">
                      LIÊN HỆ MUA NGAY
                    </button>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>{" "}
        </div>
      </div>

      {/* feedback */}
      <div className="w-full mx-auto max-sm:w-full bg-gray-200 p-3">
        <div className="bg-white rounded-2xl p-3 w-[1220px] max-sm:w-full mx-auto">
          <div className="my-5">
            <h2 className="text-3xl uppercase font-bold text-[#00a277] text-center mb-6">
              Feed back
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={false}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="rounded-lg"
            >
              {imagesFeedBack.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Slide ${index}`}
                    className="w-full h-96 object-cover max-sm:h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Chính sách */}

      <div className="w-full mx-auto max-sm:w-full bg-gray-200 p-3">
        <div className="bg-white rounded-2xl p-3 w-[1220px] max-sm:w-full mx-auto">
          <div className="my-5">
            <h2 className="text-3xl uppercase font-bold text-[#00a277] text-center mb-6">
              Chính sách
            </h2>
            <div className="grid grid-cols-6 gap-3 max-sm:grid-cols-2">
              {/* 1 */}
              <div className="bg-[rgb(0,162,119)] text-white p-6 rounded-2xl shadow-lg max-w-xs text-center">
                <FaFileContract className="text-4xl mx-auto mb-3" />
                <h3 className="font-bold text-lg underline">
                  Không giấy tờ hợp đồng.
                </h3>
                <p className="text-sm mt-2">
                  Không cần cung cấp giấy tờ thông tin cá nhân <br />
                  Bộ đội cũng có thể đăng ký <br />
                  Không phí hủy
                </p>
              </div>
              {/* 2 */}
              <div className="bg-[#00a277] text-white p-6 rounded-2xl shadow-lg max-w-xs text-center">
                <GiStabbedNote className="text-4xl mx-auto mb-3" />
                <h3 className="font-bold text-lg underline">
                  Đăng ký nghe gọi
                </h3>
                <p className="text-sm mt-2">
                  Nhận SMS đăng ký ứng dụng, LINE, ZALO, FACEBOOK, MERIKARI
                </p>
              </div>
              {/* 3 */}
              <div className="bg-[#00a277] text-white p-6 rounded-2xl shadow-lg max-w-xs text-center">
                <RiGitRepositoryPrivateFill className="text-4xl mx-auto mb-3" />
                <h3 className="font-bold text-lg underline">
                  Bảo mật thông tin
                </h3>
                <p className="text-sm mt-2">
                  Tất cả các thông tin của quý khách sẽ được bảo mật hoàn toàn
                  từ online đến offline
                </p>
              </div>
              {/* 4 */}
              <div className="bg-[#00a277] text-white p-6 rounded-2xl shadow-lg max-w-xs text-center">
                <FaShippingFast className="text-4xl mx-auto mb-3" />
                <h3 className="font-bold text-lg underline">
                  Freeship toàn Nhật Bản
                </h3>
                <p className="text-sm mt-2">
                  Nhận hàng chỉ sau 1-2 ngày đặt hàng
                </p>
              </div>
              {/* 5 */}
              <div className="bg-[#00a277] text-white p-6 rounded-2xl shadow-lg max-w-xs text-center">
                <FaPhone className="text-4xl mx-auto mb-3" />
                <h3 className="font-bold text-lg underline">Hỗ trợ 24/7</h3>
                <p className="text-sm mt-2">
                  Đội ngũ hỗ trợ 24/7 <br />
                  Đồng hành cùng quý khách mãi mãi
                </p>
              </div>
              {/* 6 */}
              <div className="bg-[#00a277] text-white p-6 rounded-2xl shadow-lg max-w-xs text-center">
                <HiOutlineRefresh className="text-4xl mx-auto mb-3" />
                <h3 className="font-bold text-lg underline">Đổi trả</h3>
                <p className="text-sm mt-2">Lỗi 1 đổi 1 trong vòng 30 ngày</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer top */}
      <div className="w-full text-center py-5">
        <div className="w-[1220px] max-sm:w-full mx-auto max-sm:px-3">
          <div className="leading-8 border-b border-black pb-5 ">
            <h2 className="font-bold text-xl my-5">Duongbkt</h2>
            <p>© Bản quyền thuộc công ty cổ phần Dương Gió Tai</p>
            <p>
              Giấy phép số A-02-18231 do Cục Viễn thông Kanto cấp ngày
              05/11/2020
            </p>
            <p>Phiên bản Website cập nhật lần cuối ngày 01/03/2025</p>
          </div>
          <div className="mt-5 flex justify-center text-left gap-4 border-b border-black pb-5">
            <p className="font-bold">Giấy phép kinh doanh đồ cũ:</p>
            <p className="text-gray-500">
              Mã số: 第305492115132号 <br />
              Được cấp bởi: Công an thành phố Tokyo
              <br />
              Ngày cấp: 12/01/2021
            </p>
          </div>
          <div className="mt-5 flex justify-center text-left gap-4">
            <p className="font-bold">Giấy phép Viễn thông:</p>
            <p className="text-gray-500">
              Mã số: A-02-18231
              <br />
              Được cấp bởi: Cục Viễn thông Kanto
              <br />
              Ngày cấp: 09/01/2022
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer w-full mx-auto max-sm:w-full bg-[#00a277] p-3">
        <div className="bg-white rounded-2xl p-3 w-[1220px] max-sm:w-full mx-auto">
          <div className="my-5">
            <div className="grid grid-cols-4 gap-10 max-sm:grid-cols-2 max-sm:gap-2 max-sm:text-sm">
              {/* thông tin  */}
              <div className="">
                <h2>Thông tin công ty</h2>
                <p>Tổng quan công ty</p>
                <p>Điều khoản sử dụng</p>
                <p>Tuyên bố dựa trên luật giao dịch thương mại</p>
                <p>Giấy phép viễn thông</p>
                <p>Giấy phép kinh doanh đồ cũ</p>
              </div>
              {/* Địa chỉ */}
              <div className="">
                <h2>Thông tin công ty</h2>
                <p>〒170-0005 東京都豊島区南大塚2ー41ー5 大塚渡東ビル 4A</p>
              </div>
              {/* Chính sách */}
              <div className="">
                <h2>Chính sách</h2>
                <p>Chính sách bảo mật công ty</p>
                <p>Chính sách sản phẩm</p>
                <p>Chính sách đổi trả và bảo hành</p>
                <p>Chính sách giải quyết khiếu nại</p>
                <p>Chính sách vận chuyển</p>
              </div>
              {/* Liên hệ */}
              <div className="">
                <h2>Liên hệ</h2>
                <p>
                  Hotline: <span>+81 70-3842-0888</span>
                </p>
                <p>Email: duong@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
