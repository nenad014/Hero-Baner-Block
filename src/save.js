import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title, subtitle, backgroundImage, buttonText, buttonUrl } = attributes;

    return (
        <div { ...useBlockProps.save() } style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2>
                <RichText.Content value={title} />
            </h2>
            <p>
                <RichText.Content value={subtitle} />
            </p>
            <a href={buttonUrl} className="hero-button">
                <RichText.Content value={buttonText} />
            </a>
        </div>
    );
}