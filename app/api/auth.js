export async function getTokenPair(username, password) {
  const url = 'http://localhost:8000/api/token/';
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return response
}

export async function refreshAccessToken(refresh) {
  const url = 'http://localhost:8000/api/token/refresh/';
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh })
  });
  return response.json();
}

export async function blacklistRefreshToken(refresh) {
  const url = 'http://localhost:8000/api/token/blacklist/';
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh })
  });
  return response.json();
}

export async function login(username, password) {
  if (localStorage.getItem('authenticated')) {
    throw new Error("Already logged in");
  }
  const response = await getTokenPair(username, password);
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const data = await response.json();
  try {
    localStorage.setItem('access', data.access);
    localStorage.setItem('refresh', data.refresh);
    localStorage.setItem('username', username);
    localStorage.setItem('authenticated', true);
  } catch (err) {
    throw new Error(`Error while storing tokens: ${err}`);
  }
  return response;
}

export async function logout() {
  const removeTokens = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('username');
    localStorage.removeItem('authenticated');
  };

  const refresh = localStorage.getItem('refresh');
  const response = await blacklistRefreshToken(refresh);
  if (!response.ok) {
    removeTokens(); // remove tokens even if the request fails
    return response.statusText;
  }
  removeTokens();
  return response.statusText;
}

export async function interceptExpiredTokenResponse(url, options) {
  const response = await fetch(url, options);
  if (response.ok) {
    return response;
  }
  if (response.status !== 401) {
    return response;
  }
  const refresh = localStorage.getItem('refresh');
  if (!refresh) {
    return response;
  }
  const refreshResponse = await refreshAccessToken(refresh);
  if (!refreshResponse.ok) {
    return response;
  }
  console.log('refreshed token:', refreshResponse.access);
  localStorage.setItem('access', refreshResponse.access);
  const newOptions = {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${refreshResponse.access}`
    }
  };
  return await fetch(url, newOptions);
}

export function getAuthorizationHeaders() {
  const access = localStorage.getItem('access');
  if (access) {
    return {
      'Authorization': `Bearer ${access}`,
      'Content-Type': 'application/json',
    };
  }
  return {};
}