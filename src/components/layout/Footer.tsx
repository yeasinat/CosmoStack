
const Footer = () => {
  return (
   <footer className="py-5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} CosmoStack. <span className="font-semibold"> Free to use.</span></p>
      </div>
    </footer>
  )
}

export default Footer