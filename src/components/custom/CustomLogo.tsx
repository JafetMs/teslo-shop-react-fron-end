import { Link } from "react-router"

interface Props {
    subtitlte?:string;
}
export const CustomLogo = ({subtitlte = 'Shop'}: Props) => {
  return (

    <Link to={'/'} className="flex items-center whitespace-nowrap">
    <span className="font-montserrat font-bold text-purple-800 text-xl m-0 whitespace-nowrap"> 
        Teslo |
    </span>
    <p className=" font-bold  text-black m-0 px-2 whitespace-nowrap">
        {subtitlte}
    </p>
    </Link>
    
  )
}