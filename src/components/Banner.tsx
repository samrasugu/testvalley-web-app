import { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, FreeMode, Pagination } from "swiper/modules"
import { useAppDispatch, useAppSelector } from "../utils/hooks"
import { getBannerAsync } from "../pages/Home/homeAsync"

export default function Banner() {
  const dispatch = useAppDispatch()
  const { banner } = useAppSelector(state => state.home)
  useEffect(() => {
    dispatch(getBannerAsync())
  }, [dispatch])
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      freeMode={true}
      centerInsufficientSlides
      setWrapperSize={true}
      style={{ width: "100%", objectFit: "fill"}}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="h-[323px] mySwiper"
    >
      {banner.map(banner => {
        return (
          <SwiperSlide key={banner.bannerId}>
            <img
              src={banner.pcImageUrl}
              alt={banner.title}
              className="h-full object-contain w-full"
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
