export const getRandomBG = () => {
       const bgClasses = [
           "bg-blue-500",
           "bg-gray-400",
           "bg-purple-500",
           "bg-blue-400",
           "bg-red-500",
       ];
       return bgClasses[Math.floor(Math.random() * bgClasses.length)];
};

export const getBGColor = () => {
    const BGarr = [
        "bg-blue-500",
        "bg-purple-500",
        "bg-red-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-pink-500",
        "bg-indigo-500",
    ];
    const randomColor = Math.floor(Math.random() * BGarr.length);
    const color = BGarr[randomColor];
    return color;
}