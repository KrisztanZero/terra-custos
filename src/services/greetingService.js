export async function getGreeting(){
    const response = await fetch('http://localhost:7021/api/Greeting');
    if (!response.ok){
        throw new Error('Failed to fetch greeting');
    }
    return await response.text();
}

export async function getSecretMessage(sessionId){
    const response = await fetch(`http://localhost:7021/api/secret-message/${sessionId}`);
    if (!response.ok){
        throw new Error('Failed to fetch secret message');
    }
    return await response.text();
}

export async function getPremiumMessage(sessionId){
    const response = await fetch(`http://localhost:7021/api/premium/${sessionId}`);
    if (!response.ok){
        throw new Error('Failed to fetch premium message');
    }
    return await response.text();
}