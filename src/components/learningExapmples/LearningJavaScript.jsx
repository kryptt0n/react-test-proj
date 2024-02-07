
const person = {
    name: "Vitaly",
    age: 22,
    address: {
        firstLine: "203 Humber College",
        secondLine: "420",
        city: "Etobicoke"
    },
    links: ['instagram', 'vk', 'linkedin'],
    printProfiles: () => {
        person.links.map(
            (link) => {
                console.log(link)
            }
        )
    }
}

export default function LearningComponent() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.age} + {person.address.firstLine} city: {person.address.city}</div>
            <div>{person.printProfiles()}</div>
        </>
    )
}