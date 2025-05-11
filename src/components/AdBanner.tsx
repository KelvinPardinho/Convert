import { useEffect, useRef } from 'react';

interface AdBannerProps {
  position: 'top' | 'bottom' | 'sidebar';
  className?: string;
}

const AdBanner = ({ position, className = '' }: AdBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This would be replaced with actual AdSense code
    const loadAd = () => {
      try {
        if (window.adsbygoogle && adRef.current) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('Error loading AdSense ad:', error);
      }
    };

    loadAd();
  }, []);

  let adSize = '';
  switch (position) {
    case 'top':
    case 'bottom':
      adSize = 'min-h-[90px] md:min-h-[90px]';
      break;
    case 'sidebar':
      adSize = 'min-h-[250px] md:min-h-[600px]';
      break;
    default:
      adSize = 'min-h-[90px]';
  }

  return (
    <div className={`bg-gray-100 mx-auto my-4 ${adSize} ${className}`}>
      <div ref={adRef} className="w-full h-full flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="xxxxxxxxxx"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <span className="text-gray-400 text-sm">Anúncio</span>
      </div>
    </div>
  );
};

export default AdBanner;