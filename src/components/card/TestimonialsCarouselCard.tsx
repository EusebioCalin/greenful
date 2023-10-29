const TestimonialCardsCarouselCard = async ({
  text,
  clientName,
}: {
  text: string
  clientName: string
}) => {
  return (
    <div className='flex flex-col items-center justify-start my-8 h-full'>
      <h1 className='my-4 text-3xl text-color-text'>{clientName}</h1>
      <p className='text-md text-center mx-16'>{text}</p>
    </div>
  )
}

export default TestimonialCardsCarouselCard
