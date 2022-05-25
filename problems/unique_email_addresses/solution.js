/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    // parse the .
    let emailsRemovedDots = handleRemoveDots(emails)
    // parse the +
    let emailsParsedPlus = handleParsedPlus(emailsRemovedDots)
    // remove the duplicates
    let removeDuplicates = emailsParsedPlus.filter((email, index) =>  emailsParsedPlus.indexOf(email) === index)
    console.log(removeDuplicates.length)

    return removeDuplicates.length
};


const handleParsedPlus = (emails) => {
   return emails.map((email)=>{
        const local = email.split('@')[0].split('+')[0];
        return `${local}@${email.split('@')[1]}`
    })
}


const handleRemoveDots = (emails) => {
    return emails.map(email => {        
       return `${email.split('@')[0].replace(/\./g,'')}@${email.split('@')[1]}`
    })
}