const useConstants = () => {
    const SITE_NAME = import.meta.env.VITE_SITE_NAME || 'My Site'
    return { SITE_NAME }
}

export default useConstants