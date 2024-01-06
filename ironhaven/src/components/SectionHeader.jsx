


export default function SectionHeader({icon,heading,classi}){

    return <div className={`section__head ${classi}`}>
        <span>{icon}</span>
        <h2>{heading}</h2>
    </div>
}