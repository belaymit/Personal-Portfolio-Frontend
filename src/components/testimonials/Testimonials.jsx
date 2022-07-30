import React from 'react'
import John_McCarthy from '../../assets/images/0013.jpg'
import PaulVolker from '../../assets/images/0014.jpg'
import AlanTuring from '../../assets/images/014.jpg'
import DennisRitchie from '../../assets/images/015.jpg'
import JamesGosiling from '../../assets/images/016.jpg'

import {Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination'

import './testimonials.css'

const data = [
    {
        avatar: John_McCarthy,
        name:'John McCarthy',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti recusandae quasi ea modi cum minima ducimus ut explicabo, obcaecati dolorem accusantium voluptates unde quod sunt repellat animi culpa dolorum, maxime asperiores. Quas tempore eligendi beatae, voluptate corrupti harum vero.',
    },
    {
        avatar: PaulVolker,
        name:'Paul Volker',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet obcaecati non quibusdam ullam quisquam vitae! Repellendus, alias nihil iusto id, dolorem quaerat quae accusamus soluta ab consequuntur nesciunt quos possimus. Molestiae dolor esse aliquid at dolorum quidem ab voluptatem!',
    },
    {
        avatar: AlanTuring,
        name:'Alan Turing',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet obcaecati non quibusdam ullam quisquam vitae! Repellendus, alias nihil iusto id, dolorem quaerat quae accusamus soluta ab consequuntur nesciunt quos possimus. Molestiae dolor esse aliquid at dolorum quidem ab voluptatem!',
    },
     {
        avatar: DennisRitchie,
        name:'Dennis Ritchie',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet obcaecati non quibusdam ullam quisquam vitae! Repellendus, alias nihil iusto id, dolorem quaerat quae accusamus soluta ab consequuntur nesciunt quos possimus. Molestiae dolor esse aliquid at dolorum quidem ab voluptatem!',
    },
    {
        avatar: JamesGosiling,
        name:'James Gosiling',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet obcaecati non quibusdam ullam quisquam vitae! Repellendus, alias nihil iusto id, dolorem quaerat quae accusamus soluta ab consequuntur nesciunt quos possimus. Molestiae dolor esse aliquid at dolorum quidem ab voluptatem!',
    }
]

const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonial__header'>
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials__container"
            modules = {[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable:true}}>
            {
                data.map(({avatar, name, review}, index)=>{
                    return(
                        <SwiperSlide key = {index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt="John McCarthy"/>
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Testimonials