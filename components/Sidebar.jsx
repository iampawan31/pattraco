import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const Sidebar = () => {
  return (
    <div className="flex flex-col static h-screen w-full">
      <div className="flex w-full h-1/2 md:h-2/5 min-h-fit py-2 justify-center border-b border-black">
        <div className="text-sideways font-light text-2xl">PATTRACO</div>
      </div>
      <div className="flex w-full items-end pb-4 h-1/2 md:h-3/5 min-h-fit py-2 justify-center">
        <div className="w-full border-t border-black flex justify-center items-center h-1/3">
          <FontAwesomeIcon
            spin
            className="fa-spin"
            size="2x"
            icon={faStarOfLife}
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
