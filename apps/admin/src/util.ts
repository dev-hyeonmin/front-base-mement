/**
 * AD_TOKEN - 사용자 토큰 accessToken, refreshToken
 */
const AD_TOKEN = 'AD_TOKEN';

/**
 * Get Token
 */
export const getToken = () => {
  return localStorage.getItem(AD_TOKEN) ? JSON.parse(localStorage.getItem(AD_TOKEN) as string) : null;
};
/**
 * Set Token
 * @type {string}
 */
export const setToken = (data: { accessToken: string; refreshToken?: string }) => {
  const sData = JSON.stringify(data);
  localStorage.setItem(AD_TOKEN, sData);
};
/**
 * Remove Token
 * @type {string}
 */
export const removeToken = () => {
  localStorage.removeItem(AD_TOKEN);
};