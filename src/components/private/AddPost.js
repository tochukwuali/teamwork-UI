import React, {useState} from 'react'

const AddPost = () => {
    const [text, setText] = useState('')

    return (
      <div>
        <label className="block">
          <span className="text-gray-700">Textarea</span>
          <textarea
            className="form-textarea mt-1 block w-full"
            rows="3"
            placeholder="Enter some long form content."
            value={text}
            onChange={e=>setText(e.target.value)}
          ></textarea>
        </label>
      </div>
    );
}

export default AddPost
