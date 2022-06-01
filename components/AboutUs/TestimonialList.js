import TestimonialItem from "./TestimonialItem";
import { useEffect } from "react";

const TestimonialList = ({about_us_testimonal_list}) => {

    useEffect(() => {
        let slideTestimonial = $('.slide-3-1').slick({
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                    },
                },
            ],
        });

        return () => {
            slideTestimonial.slick('unslick');
        };
    }, [about_us_testimonal_list])

    return <div className="testimonial-slider product-wrapper slide-3-1 slick-lg-space">
        {
            about_us_testimonal_list.map((item, index) => {
                return <TestimonialItem key={index} {...item}/>
            })
        }
    </div>
}

export default TestimonialList;