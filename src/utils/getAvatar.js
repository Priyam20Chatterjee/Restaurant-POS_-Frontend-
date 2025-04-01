export const getAvatar = (name) => {
       if(!name) return "";
       const [firstName, lastName] = name.split(" ");
       return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`

       // return name. split(" ").map(word => word.charAt(0).toUpperCase()).join("");
}