import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

import './editor.scss';


export default function Edit({ attributes, setAttributes }) {
    const { title, subtitle, backgroundImage, buttonText, buttonUrl } = attributes;

    const onSelectImage = (image) => {
        setAttributes({ backgroundImage: image.url });
    };

    return (
        <div { ...useBlockProps() } style={{ backgroundImage: `url(${backgroundImage})` }}>
            <MediaUpload
                onSelect={onSelectImage}
                type="image"
                render={({ open }) => (
                    <Button onClick={open} className="button button-large">
                        { backgroundImage ? __('Change Image') : __('Upload Image') }
                    </Button>
                )}
            />
            <RichText
                tagName="h2"
                placeholder={ __('Title...') }
                value={title}
                onChange={(value) => setAttributes({ title: value })}
            />
            <RichText
                tagName="p"
                placeholder={ __('Subtitle...') }
                value={subtitle}
                onChange={(value) => setAttributes({ subtitle: value })}
            />
            <RichText
                tagName="a"
                placeholder={ __('Button Text...') }
                value={buttonText}
                onChange={(value) => setAttributes({ buttonText: value })}
            />
            <RichText
                tagName="a"
                placeholder={ __('Button URL...') }
                value={buttonUrl}
                onChange={(value) => setAttributes({ buttonUrl: value })}
            />
        </div>
    );
}