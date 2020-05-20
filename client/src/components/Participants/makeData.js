
const newPerson = (participant) => {

    return {
        firstName: participant.first_name,
        lastName: participant.last_name,
        company: participant.company_name,
        position: participant.position_in_company,
        country: participant.county_name,
        email: participant.user_email,
        registrationDate: participant.created.substr(0, participant.created.length - 14),
        status: participant.status
    }

};

export default function makeData(particpantsArray) {
    return particpantsArray.map(participant => {
        return {
            ...newPerson(participant)
        }
    })
}
