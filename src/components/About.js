function About({about, image= "https://via.placeholder.com/215"}){


// const {about, image= "https://via.placeholder.com/215"} = prop
   

return (
        <aside>
            <img src={image} alt = "blog logo" />
            <p>{about}</p>


        </aside>
    )
}


export default About