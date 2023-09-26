import Card from '@/components/card/BasicCard'
import texts from '@/utils/en-US.json'
import CardCarousel from '../cardCarousel/CardCarousel'

const carouselData = [
  {
    title: 'card.title1',
    text: 'card.text1',
    image: '/images/card_1-mobile.jpg',
  },
  {
    title: 'card.title2',
    text: 'card.text2',
    image: '/images/card_2-mobile.jpg',
  },
  {
    title: 'card.title3',
    text: 'card.text3',
    image: '/images/card_3-mobile.jpg',
  },
  {
    title: 'card.title4',
    text: 'card.text4',
    image: '/images/card_4-mobile.jpg',
  },
  {
    title: 'card.title5',
    text: 'card.text5',
    image: '/images/card_5-mobile.jpg',
  },
]

const Cards = () => {
  return (
    <section className='max-w-screen-xl px-6 lg:px-0 leading-8'>
      <h1 className='mt-16 font-semibold text-center uppercase text-3xl text-color-secondary'>
        {texts['cards.header']}
      </h1>
      {/* large screen */}
      <div className='hidden w-full lg:grid content-center items-center gap-4 mt-8 lg:px-4 md:grid-cols-3 '>
        <Card
          title={texts['card.title1']}
          text={texts['card.text1']}
          image={'/images/card_1.jpg'}
        />
        <Card
          title={texts['card.title2']}
          text={texts['card.text2']}
          image={'/images/card_2.jpg'}
        />
        <Card
          title={texts['card.title3']}
          text={texts['card.text3']}
          image={'/images/card_3.jpg'}
        />
      </div>
      <div className='hidden w-full lg:grid content-center items-center gap-4 lg:p-4 md:grid-cols-2 '>
        <Card
          title={texts['card.title4']}
          text={texts['card.text4']}
          image={'/images/card_4.jpg'}
        />
        <Card
          title={texts['card.title5']}
          text={texts['card.text5']}
          image={'/images/card_5.jpg'}
        />
      </div>
      {/* small screen */}
      <div className='lg:hidden mt-8 grid grid-cols-1 place-items-center'>
        <CardCarousel data={carouselData} />
      </div>
    </section>
  )
}

export default Cards
