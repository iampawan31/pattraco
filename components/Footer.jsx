const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="w-full h-full lg:h-16 space-y-6 bg-primary lg:space-y-1 flex flex-col justify-center items-center uppercase py-10">
      <div> &#169; {currentYear} Pattraco</div>
    </div>
  )
}

export default Footer
