import { useEffect } from 'react';
import { useGlitch } from 'react-powerglitch';
import { useTheme } from '@/Contexts/theme';

export const useThemedGlitch: typeof useGlitch = (userOptions) => {
  const { dark } = useTheme();
  
  const glitch = useGlitch(userOptions);

  useEffect(() => {
    glitch.setOptions({ ...userOptions, playMode: dark ? userOptions?.playMode : "manual" });
  }, [dark]); 

  return glitch;
};
