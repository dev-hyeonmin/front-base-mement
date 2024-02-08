import cookie from 'react-cookies';

/**
 * AD_TOKEN - 사용자 토큰 accessToken, refreshToken
 */
const AD_TOKEN = 'AD_TOKEN';
const AD_RF_TOKEN = 'ad_re_token';

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

/**
 * Get RefressToken
 */
export const getRefressToken = () => {
  return cookie.load(AD_RF_TOKEN);
};

/**
 * Set RefressToken
 * @type {string}
 */
export const setRefressToken = (refreshToken: string) => {
  cookie.save(AD_RF_TOKEN, refreshToken, {
    path: '/',
    // secure: true,
    // httpOnly: true
  });
};

/**
 * Set All Form Value
 */
export const setFormValue = (data: Record<string, any>, setValue: any) => {
  Object.entries(data).forEach(
    ([name, value]: any) => setValue(name, value));
}

/**
 * Set All Form Value
 */
export const logout = () => {
  // const { t } = useTranslation();
  // const navigate = useNavigate();

  // if (!window.confirm(t('login.logoutMessage'))) {
  //   return;
  // }

  removeToken();
  // navigate('/');
  window.location.reload();
}
