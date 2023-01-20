import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from "@tiptap/starter-kit";

const MenuBar = ({ editor }) => {
   if (!editor) {
      return null;
   }

   return (
      <>
         <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
               !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
            }
            className={editor.isActive('bold') ? 'is-active' : ''}
         >
            bold
         </button>
         <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
               !editor.can()
                  .chain()
                  .focus()
                  .toggleItalic()
                  .run()
            }
            className={editor.isActive('italic') ? 'is-active' : ''}
         >
            italic
         </button>
         <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
               !editor.can()
                  .chain()
                  .focus()
                  .toggleStrike()
                  .run()
            }
            className={editor.isActive('strike') ? 'is-active' : ''}
         >
            strike
         </button>
         <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive('paragraph') ? 'is-active' : ''}
         >
            paragraph
         </button>
         <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
         >
            h1
         </button>
         <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
         >
            h2
         </button>
         <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
         >
            h3
         </button>
         <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
         >
            bullet list
         </button>
         <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
         >
            ordered list
         </button>
      </>
   );
};

const Tiptap = () => {
   const editor = useEditor({
      extensions: [
         StarterKit,
      ]
   });

   return (
      <>
         <MenuBar editor={editor} />
         <EditorContent editor={editor} />
      </>
   );
};

export default Tiptap;