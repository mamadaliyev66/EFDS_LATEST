import { useState } from "react";

export default function ImageViewer() {
    const images = [
        { src: '/assets/vizual.png', alt: 'scheme' },
        { src: '/assets/drone.png', alt: 'Ocean view' },
        { src: 'https://i0.wp.com/clearspot.ai/wp-content/uploads/2023/09/forests-12-00217-g007.webp?fit=2093%2C1525&ssl=1', alt: '' },
        { src: 'https://www.researchgate.net/profile/M-Akter-Tonima/publication/342574894/figure/fig16/AS:1001364993884161@1615755427441/Flame-and-smoke-detection-using-YOLOv3-red-bounding-box-denotes-smoke-detection-and.png', alt: 'Sunset hills' },
        { src: 'https://www.mdpi.com/fire/fire-08-00205/article_deploy/html/images/fire-08-00205-g006.png', alt: 'Foggy forest' },
        { src: 'https://www.mdpi.com/sensors/sensors-23-09043/article_deploy/html/images/sensors-23-09043-g009-550.jpg', alt: 'Golden field' },
        { src: 'https://www.researchgate.net/publication/372026817/figure/fig8/AS:11431281171964875@1688407776652/The-detection-results-of-the-YOLOv5-and-YOLOv5-IFFDM-models-for-forest-fire-and-smoke.png', alt: 'Ocean view' },
        { src: 'https://static.euronews.com/articles/stories/07/90/45/78/1536x864_cmsv2_991815ed-2c43-5e05-ad3b-97c2ffafab44-7904578.jpg', alt: 'Ocean view' },
        { src: 'https://t4.ftcdn.net/jpg/11/98/83/95/360_F_1198839532_SW7G1135znRvduWXfjiyBwQul8XoDQfg.jpg', alt: 'Ocean view' },
        { src: 'https://res.cloudinary.com/dvv9fvblr/image/upload/v1722261198/forsilvitech/cover-images/wk4f72nhceqbplt9oiu7.jpg', alt: 'Ocean view' },
        { src: 'https://www.mdpi.com/sensors/sensors-23-07086/article_deploy/html/images/sensors-23-07086-g008.png', alt: 'Ocean view' },
        { src: 'https://imagevision.ai/wp-content/uploads/2025/01/Fire-and-Smoke-Detection-Challenges-in-Complex-Industrial-Environments.png', alt: 'Ocean view' },
    ];

    const [popupImg, setPopupImg] = useState(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 bg-neutral-100 dark:bg-neutral-800 cursor-pointer"
                        onClick={() => setPopupImg(img)}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-60 object-cover"
                        />
                    </div>
                ))}
            </div>

            {popupImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setPopupImg(null)}
                >
                    <div
                        className="relative bg-white dark:bg-neutral-900 rounded-lg p-4 max-w-3xl w-full flex flex-col items-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-2xl text-gray-700 dark:text-gray-200 hover:text-red-500"
                            onClick={() => setPopupImg(null)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <img
                            src={popupImg.src}
                            alt={popupImg.alt}
                            className="max-h-[80vh] w-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
