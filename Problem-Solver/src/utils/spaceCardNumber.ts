export const spaceCardNumber = (input : string) : string => {
    if(!input) return "";
    const sanitizedInput = input.replace(/\s+/g, "");

    // Split into groups of up to 4 characters and join with spaces
    return sanitizedInput.match(/.{1,4}/g)?.join(" ") ?? sanitizedInput;
}