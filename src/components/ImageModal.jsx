

const ImageModal = ({ image, onClose }) => {

  if(!image) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Vista ampliada"
        className="w-full object-cover"
      />
    </div>
  )  

}

export default ImageModal