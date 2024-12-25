import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
    ClassicEditor,
    AccessibilityHelp,
    Autoformat,
    AutoLink,
    Autosave,
    BalloonToolbar,
    BlockQuote,
    Bold,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlEmbed,
    Indent,
    IndentBlock,
    Italic,
    Link,
    Paragraph,
    SelectAll,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    TextPartLanguage,
    TextTransformation,
    Underline,
    Undo,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageUpload,
    Table,
    TableToolbar,
    Font,
    FontSize,
    FontColor,
    FontBackgroundColor,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import './CkEditor.css';

export default function CkEditorComponent({ disabled, data, onEvent }) {
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {
        setIsLayoutReady(true);

        return () => setIsLayoutReady(false);
    }, []);

    const editorConfig = {
        toolbar: {
            items: [
                'undo',
                'redo',
                '|',
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                '|',
                'highlight',
                'fontColor',
                'fontBackgroundColor',
                '|',
                'outdent',
                'indent',
                '|',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'insertTable',
                'imageUpload',
                '|',
                'blockQuote',
                'code',
                'horizontalLine',
                '|',
                'fontSize',
                '|',
                'strikethrough',
                'subscript',
                'superscript',
                '|',
                'undo',
                'redo',
            ],
            shouldNotGroupWhenFull: true,
        },
        plugins: [
            AccessibilityHelp,
            Autoformat,
            AutoLink,
            Autosave,
            BalloonToolbar,
            BlockQuote,
            Bold,
            Code,
            CodeBlock,
            Essentials,
            FindAndReplace,
            Font,
            FontSize,
            FontColor,
            FontBackgroundColor,
            Highlight,
            HorizontalLine,
            HtmlEmbed,
            Image,
            ImageToolbar,
            ImageCaption,
            ImageStyle,
            ImageUpload,
            Indent,
            IndentBlock,
            Italic,
            Link,
            Paragraph,
            SelectAll,
            SpecialCharacters,
            SpecialCharactersArrows,
            SpecialCharactersCurrency,
            SpecialCharactersEssentials,
            SpecialCharactersLatin,
            SpecialCharactersMathematical,
            SpecialCharactersText,
            Strikethrough,
            Table,
            TableToolbar,
            TextPartLanguage,
            TextTransformation,
            Underline,
            Undo,
        ],
        image: {
            toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side'],
            upload: {
                types: ['jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'],
            },
        },
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            decorators: {
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file',
                    },
                },
            },
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
        },
        fontSize: {
            options: [9, 11, 13, 'default', 17, 19, 21],
        },
        placeholder: 'Nhập hoặc dán nội dung của bạn ở đây!',
    };

    return (
        <div>
            <div className="main-container">
                <div className="editor-container editor-container_classic-editor" ref={editorContainerRef}>
                    <div className="editor-container__editor">
                        <div ref={editorRef}>
                            {isLayoutReady && (
                                <CKEditor
                                    data={data}
                                    disabled={disabled}
                                    onChange={(event, editor) => onEvent(editor.getData())}
                                    editor={ClassicEditor}
                                    config={editorConfig}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
