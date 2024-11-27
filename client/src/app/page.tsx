'use client';

import axios from 'axios';
import React, { useState } from 'react';
import { LocalDateTime } from 'js-joda';
import DatePicker from 'react-datepicker';

export default function Page() {
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState('twitter');
  const [scheduleTime, setScheduleTime] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:5001/posts',
        {
          content,
          platform,
          scheduleTime,
        },
        { withCredentials: true },
      );
      alert('Post scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling post:', error);
    }
  };

  return (
    <div>
      <h2>Schedule a Social Media Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Platform:</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
          </select>
        </div>
        <div>
          <label>Schedule Time:</label>
          <DatePicker
            selected={scheduleTime}
            onChange={(date) => setScheduleTime(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <button type="submit">Schedule Post</button>
      </form>
    </div>
  );
}
