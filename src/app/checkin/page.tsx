// src/app/checkin/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase/client';
import Card from '../../components/Card';

export default function CheckInPage() {
  const [stadiums, setStadiums] = useState<any[]>([]);
  const [selectedStadium, setSelectedStadium] = useState('');
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchStadiums = async () => {
      const { data, error } = await supabase.from('stadiums').select('*').order('name');
      if (!error) setStadiums(data);
    };

    fetchStadiums();
  }, []);

  const handleCheckIn = async () => {
    if (!selectedStadium) return;

    const { error } = await supabase.from('checkins').insert([
      {
        stadium_id: selectedStadium,
        notes: notes || null,
      },
    ]);

    if (error) {
      setMessage('❌ Error saving check-in');
    } else {
      setMessage('✅ Check-in saved successfully!');
      setSelectedStadium('');
      setNotes('');
    }
  };

  return (
    <Card title="Stadium Check-In">
      <div className="space-y-4">
        {/* Stadium Dropdown */}
        <div>
          <label htmlFor="stadium" className="block text-gray-700 font-semibold mb-1">
            Choose a Stadium:
          </label>
          <select
            id="stadium"
            className="w-full p-2 border rounded"
            value={selectedStadium}
            onChange={(e) => setSelectedStadium(e.target.value)}
          >
            <option value="">-- Select a Stadium --</option>
            {stadiums.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} - {s.team}
              </option>
            ))}
          </select>
        </div>

        {/* Notes Input */}
        <div>
          <label htmlFor="notes" className="block text-gray-700 font-semibold mb-1">
            Notes (optional):
          </label>
          <textarea
            id="notes"
            className="w-full p-2 border rounded"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Any memories or highlights from this visit?"
          />
        </div>

        {/* Submit Button */}
        <button
          className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleCheckIn}
        >
          Check In
        </button>

        {/* Message */}
        {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
      </div>
    </Card>
  );
}