import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client('793959150532-n8h7ji8lere1c2ok9q262nul33tmpftf.apps.googleusercontent.com');

export async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '793959150532-n8h7ji8lere1c2ok9q262nul33tmpftf.apps.googleusercontent.com',
    });
    const payload = ticket.getPayload();
    return payload;
  } catch (error) {
    console.error('Error verifying Google token:', error);
    return null;
  }
}
