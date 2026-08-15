async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Alexandre-Gervasio/js-developer-portfolio/refs/heads/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}