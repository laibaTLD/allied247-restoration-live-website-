'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { BulletList } from '@tiptap/extension-bullet-list'
import { OrderedList } from '@tiptap/extension-ordered-list'
import { ListItem } from '@tiptap/extension-list-item'
import { Highlight } from '@tiptap/extension-highlight'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { HorizontalRule } from '@tiptap/extension-horizontal-rule'
import { Placeholder } from '@tiptap/extension-placeholder'
import { useEffect, useState, useCallback, useRef } from 'react'
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaStrikethrough,
    FaListUl,
    FaListOl,
    FaQuoteLeft,
    FaCode,
    FaHighlighter,
    FaMinus as FaHorizontalRule,
    FaTable,
    FaBorderAll,
    FaPlus,
    FaMinus,
    FaTimes,
    FaUndo,
    FaRedo,
    FaImage,
    FaLink,
    FaAlignLeft,
    FaAlignCenter,
    FaAlignRight,
    FaHeading,
} from 'react-icons/fa'

interface RichTextEditorProps {
    content: string
    onChange: (content: string) => void
    placeholder?: string
}

export default function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
    const [showTableDialog, setShowTableDialog] = useState(false)
    const [tableRows, setTableRows] = useState(3)
    const [tableCols, setTableCols] = useState(3)
    const [withHeaderRow, setWithHeaderRow] = useState(true)
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const isUpdatingRef = useRef(false)

    const debouncedOnChange = useCallback((newContent: string) => {
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current)
        }
        
        debounceTimeoutRef.current = setTimeout(() => {
            if (!isUpdatingRef.current) {
                console.log('Debounced content update:', newContent)
                onChange(newContent)
            }
        }, 300) // 300ms debounce delay
    }, [onChange])

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3, 4, 5, 6],
                },
                bulletList: false, // Disable StarterKit's bullet list
                orderedList: false, // Disable StarterKit's ordered list
                listItem: false, // Disable StarterKit's list item
                horizontalRule: false, // Disable StarterKit's horizontal rule
            }),
            BulletList.configure({
                keepMarks: true,
                keepAttributes: false,
                HTMLAttributes: {
                    class: 'list-disc pl-6',
                },
            }),
            OrderedList.configure({
                keepMarks: true,
                keepAttributes: false,
                HTMLAttributes: {
                    class: 'list-decimal pl-6',
                },
            }),
            ListItem.configure({
                HTMLAttributes: {
                    class: 'my-1',
                },
            }),
            Highlight.configure({
                multicolor: true,
                HTMLAttributes: {
                    class: 'bg-yellow-200 px-1 rounded',
                },
            }),
            TextStyle,
            Color.configure({
                types: ['textStyle'],
            }),
            HorizontalRule.configure({
                HTMLAttributes: {
                    class: 'my-4 border-t border-gray-300',
                },
            }),
            Placeholder.configure({
                placeholder: placeholder || 'Start writing...',
            }),
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            Underline,
            Image.configure({
                HTMLAttributes: {
                    class: 'max-w-full h-auto rounded-lg',
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-600 underline hover:text-blue-800',
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content,
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none min-h-[400px] p-4 [&_table]:border-collapse [&_table]:w-full [&_th]:border [&_th]:border-black [&_th]:px-4 [&_th]:py-2 [&_th]:bg-gray-50 [&_td]:border [&_td]:border-black [&_td]:px-4 [&_td]:py-2',
                style: 'color: black; --tw-prose-body: black; --tw-prose-headings: black; --tw-prose-lead: black; --tw-prose-links: black; --tw-prose-bold: black; --tw-prose-counters: black; --tw-prose-bullets: black; --tw-prose-hr: black; --tw-prose-quotes: black; --tw-prose-quote-borders: black; --tw-prose-captions: black; --tw-prose-code: black; --tw-prose-pre-code: black; --tw-prose-pre-bg: #f5f5f5; --tw-prose-th-borders: black; --tw-prose-td-borders: black;',
            },
        },
        onUpdate: ({ editor }) => {
            const newContent = editor.getHTML()
            console.log('Editor content updated:', newContent)
            debouncedOnChange(newContent)
        },
        parseOptions: {
            preserveWhitespace: 'full',
        },
    })

    useEffect(() => {
        if (editor && content && content !== editor.getHTML() && !isUpdatingRef.current) {
            isUpdatingRef.current = true
            const currentContent = editor.getHTML()
            
            // Only update if the new content is substantially different
            if (currentContent === '<p></p>' || currentContent === '' || 
                Math.abs(content.length - currentContent.length) > 10) {
                console.log('Setting editor content from props:', content)
                editor.commands.setContent(content, { emitUpdate: false }) // Don't trigger update
            }
            
            setTimeout(() => {
                isUpdatingRef.current = false
            }, 100)
        }
    }, [content, editor])

    useEffect(() => {
        return () => {
            if (debounceTimeoutRef.current !== null) {
                clearTimeout(debounceTimeoutRef.current)
            }
            if (editor) {
                editor.destroy()
            }
        }
    }, [editor])

    if (!editor) {
        return null
    }

    const addImage = () => {
        const url = window.prompt('Enter image URL:')
        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    const setLink = () => {
        const url = window.prompt('Enter URL:')
        if (url) {
            editor.chain().focus().setLink({ href: url }).run()
        }
    }

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
            {/* Toolbar */}
            <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
                {/* Text Formatting */}
                <button
                    onClick={() => { console.log('Bold clicked'); editor.chain().focus().toggleBold().run() }}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('bold') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Bold"
                >
                    <FaBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('italic') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Italic"
                >
                    <FaItalic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('underline') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Underline"
                >
                    <FaUnderline />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('strike') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Strikethrough"
                >
                    <FaStrikethrough />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Headings */}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 font-bold ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Heading 1"
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 font-bold ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Heading 2"
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 font-bold ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Heading 3"
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 font-bold ${editor.isActive('heading', { level: 4 }) ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Heading 4"
                >
                    H4
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 font-bold ${editor.isActive('heading', { level: 5 }) ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Heading 5"
                >
                    H5
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 font-bold ${editor.isActive('heading', { level: 6 }) ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Heading 6"
                >
                    H6
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Lists */}
                <button
                    onClick={() => {
                        console.log('Bullet list clicked');
                        editor.chain().focus().toggleBulletList().run();
                    }}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('bulletList') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Bullet List"
                >
                    <FaListUl />
                </button>
                <button
                    onClick={() => {
                        console.log('Ordered list clicked');
                        editor.chain().focus().toggleOrderedList().run();
                    }}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('orderedList') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Ordered List"
                >
                    <FaListOl />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Highlight & Horizontal Rule */}
                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('highlight') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Highlight"
                >
                    <FaHighlighter />
                </button>
                <button
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className="text-gray-700 p-2 rounded hover:bg-gray-200"
                    type="button"
                    title="Horizontal Rule"
                >
                    <FaHorizontalRule />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Alignment */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Align Left"
                >
                    <FaAlignLeft />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Align Center"
                >
                    <FaAlignCenter />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Align Right"
                >
                    <FaAlignRight />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Quote & Code */}
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('blockquote') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Quote"
                >
                    <FaQuoteLeft />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('codeBlock') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Code Block"
                >
                    <FaCode />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Table */}
                <button
                    onClick={() => {
                        setShowTableDialog(true)
                    }}
                    className="text-gray-700 p-2 rounded hover:bg-gray-200"
                    type="button"
                    title="Insert Table"
                >
                    <FaTable />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Media */}
                <button
                    onClick={addImage}
                    className="text-gray-700 p-2 rounded hover:bg-gray-200"
                    type="button"
                    title="Add Image"
                >
                    <FaImage />
                </button>
                <button
                    onClick={setLink}
                    className={`text-gray-700 p-2 rounded hover:bg-gray-200 ${editor.isActive('link') ? 'bg-gray-300' : ''}`}
                    type="button"
                    title="Add Link"
                >
                    <FaLink />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Undo/Redo */}
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    className="text-gray-700 p-2 rounded hover:bg-gray-200"
                    type="button"
                    title="Undo"
                >
                    <FaUndo />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    className="text-gray-700 p-2 rounded hover:bg-gray-200"
                    type="button"
                    title="Redo"
                >
                    <FaRedo />
                </button>
            </div>

            {/* Editor Content */}
            <EditorContent editor={editor} />

            {/* Table Dialog */}
            {showTableDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
                        <h3 className="text-lg font-semibold mb-4">Insert Table</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Rows
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="20"
                                    value={tableRows}
                                    onChange={(e) => setTableRows(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Columns
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={tableCols}
                                    onChange={(e) => setTableCols(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="withHeaderRow"
                                    checked={withHeaderRow}
                                    onChange={(e) => setWithHeaderRow(e.target.checked)}
                                    className="mr-2"
                                />
                                <label htmlFor="withHeaderRow" className="text-sm text-gray-700">
                                    Include header row
                                </label>
                            </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2 mt-6">
                            <button
                                onClick={() => setShowTableDialog(false)}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    console.log('Inserting table with:', { rows: tableRows, cols: tableCols, withHeaderRow });
                                    
                                    // Check if table command is available
                                    if (editor.can().insertTable({ rows: tableRows, cols: tableCols, withHeaderRow })) {
                                        console.log('Table command available, inserting...');
                                        editor.chain().focus().insertTable({ rows: tableRows, cols: tableCols, withHeaderRow }).run();
                                        console.log('Table inserted successfully');
                                    } else {
                                        console.log('Table command not available, trying fallback...');
                                        // Fallback: create HTML table dynamically
                                        let tableHtml = `<table style="border-collapse: collapse; width: 100%;">`;
                                        
                                        if (withHeaderRow) {
                                            tableHtml += `<thead><tr>`;
                                            for (let i = 1; i <= tableCols; i++) {
                                                tableHtml += `<th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Header ${i}</th>`;
                                            }
                                            tableHtml += `</tr></thead>`;
                                        }
                                        
                                        tableHtml += `<tbody>`;
                                        for (let row = 1; row <= tableRows; row++) {
                                            tableHtml += `<tr>`;
                                            for (let col = 1; col <= tableCols; col++) {
                                                tableHtml += `<td style="border: 1px solid #ddd; padding: 8px;">Cell ${row}-${col}</td>`;
                                            }
                                            tableHtml += `</tr>`;
                                        }
                                        tableHtml += `</tbody></table>`;
                                        
                                        editor.chain().focus().insertContent(tableHtml).run();
                                        console.log('Fallback table inserted');
                                    }
                                    
                                    setShowTableDialog(false);
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Insert Table
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
