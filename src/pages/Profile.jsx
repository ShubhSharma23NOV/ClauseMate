import React, { useState } from 'react';
import { User, Mail, Briefcase, Linkedin, Edit2, Save, X } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    role: 'Legal Counsel',
    company: 'TechCorp Inc.',
    linkedin: 'linkedin.com/in/alexjohnson',
    bio: 'Experienced legal professional with expertise in corporate law and contract negotiations.',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to your backend
  };

  return (
    <DashboardLayout>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[32px] font-bold">Profile</p>
          <p className="text-sm text-[#4e6797]">Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg border border-[#d0d7e7] overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[22px] font-bold">Profile Information</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e7ebf3] hover:bg-[#d0d7e7] transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Edit Profile</span>
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#144ab7] text-white hover:bg-[#0d3a8c] transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span className="text-sm font-medium">Save Changes</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e7ebf3] hover:bg-[#d0d7e7] transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span className="text-sm font-medium">Cancel</span>
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#4e6797] mb-1">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#d0d7e7] focus:outline-none focus:ring-2 focus:ring-[#144ab7] focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-[#4e6797]" />
                      <span className="text-[#0e121b]">{profile.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4e6797] mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#d0d7e7] focus:outline-none focus:ring-2 focus:ring-[#144ab7] focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#4e6797]" />
                      <span className="text-[#0e121b]">{profile.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4e6797] mb-1">Role</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.role}
                      onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#d0d7e7] focus:outline-none focus:ring-2 focus:ring-[#144ab7] focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#4e6797]" />
                      <span className="text-[#0e121b]">{profile.role}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#4e6797] mb-1">Company</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.company}
                      onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#d0d7e7] focus:outline-none focus:ring-2 focus:ring-[#144ab7] focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#4e6797]" />
                      <span className="text-[#0e121b]">{profile.company}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4e6797] mb-1">LinkedIn Profile</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.linkedin}
                      onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#d0d7e7] focus:outline-none focus:ring-2 focus:ring-[#144ab7] focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-5 h-5 text-[#4e6797]" />
                      <span className="text-[#0e121b]">{profile.linkedin}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4e6797] mb-1">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 rounded-lg border border-[#d0d7e7] focus:outline-none focus:ring-2 focus:ring-[#144ab7] focus:border-transparent"
                    />
                  ) : (
                    <p className="text-[#0e121b]">{profile.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile; 