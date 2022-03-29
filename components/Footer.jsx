const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="w-full h-11 flex justify-center items-center font-sans uppercase">
      <div> &#169; {currentYear} Pattraco</div>
    </div>
  )
}

export default Footer
