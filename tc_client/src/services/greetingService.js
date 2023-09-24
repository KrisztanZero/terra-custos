export async function getGreeting(){
    const response = await fetch('https://localhost:7021/Greeting');
    if (!response.ok){
        throw new Error('Failed to fetch greeting');
    }
    return await response.text();
}