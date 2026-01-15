"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { User, Phone, MapPin, Building, GraduationCap, Briefcase, Star, Upload, CheckCircle } from 'lucide-react';

interface UserProfile {
    id: string;
    role: 'intern' | 'startup';
    verified: boolean;
}

export default function VerifyPage() {
    const router = useRouter();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        location: '',
        bio: '',
        university: '',
        major: '',
        graduationYear: '',
        skills: [] as string[],
        resume: null as File | null,
    });

    const skills = [
        'JavaScript', 'Python', 'React', 'Node.js', 'Machine Learning', 'UI/UX Design',
        'Data Analysis', 'Digital Marketing', 'Project Management', 'Mobile Development',
        'Blockchain', 'DevOps', 'Content Writing', 'Sales', 'Business Development'
    ];

    const handleSkillToggle = (skill: string) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.includes(skill)
                ? prev.skills.filter((s: string) => s !== skill)
                : [...prev.skills, skill]
        }));
    };

    const handleNext = () => {
        // Validate current step before proceeding
        if (currentStep === 1) {
            const { fullName, email, phone, location, bio } = formData;
            if (!fullName || !email || !phone || !location || !bio) {
                alert('Please fill in all required fields');
                return;
            }
        }
        if (currentStep < 2) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file type and size
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            const maxSize = 10 * 1024 * 1024; // 10MB

            if (!allowedTypes.includes(file.type)) {
                alert('Please upload a PDF or Word document');
                return;
            }

            if (file.size > maxSize) {
                alert('File size must be less than 10MB');
                return;
            }

            setFormData(prev => ({ ...prev, resume: file }));
        }
    };

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.replace("/login");
                return;
            }

            // Get user profile
            const { data: profile, error } = await supabase
                .from("profiles")
                .select("id, role, verified")
                .eq("id", user.id)
                .single();

            if (error || !profile) {
                router.replace("/select-role");
                return;
            }

            if (profile.verified) {
                router.replace(`/dashboard/${profile.role}`);
                return;
            }

            setProfile(profile);
            
            // Pre-fill email if available
            setFormData(prev => ({ ...prev, email: user.email || '' }));
        };
        
        checkAuth();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!profile) return;

        // Validate step 2 fields for intern
        if (profile.role === 'intern') {
            const { university, major, graduationYear } = formData;
            if (!university || !major || !graduationYear) {
                alert('Please fill in all required education fields');
                return;
            }
        }

        setLoading(true);

        try {
            // Upload resume if provided
            let resumeUrl = null;
            if (formData.resume) {
                const fileExt = formData.resume.name.split('.').pop();
                const fileName = `${profile.id}-resume.${fileExt}`;
                
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('resumes')
                    .upload(fileName, formData.resume, { upsert: true });

                if (uploadError) {
                    console.error('Resume upload error:', uploadError);
                    alert('Failed to upload resume. Please try again.');
                    setLoading(false);
                    return;
                }

                resumeUrl = uploadData.path;
            }

            // Update profile with all information
            const updateData: any = {
                full_name: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                location: formData.location,
                bio: formData.bio,
                verified: true,
                updated_at: new Date().toISOString(),
            };

            // Add intern-specific fields
            if (profile.role === 'intern') {
                updateData.university = formData.university;
                updateData.major = formData.major;
                updateData.graduation_year = formData.graduationYear;
                updateData.skills = formData.skills;
                if (resumeUrl) {
                    updateData.resume_url = resumeUrl;
                }
            }

            const { error } = await supabase
                .from("profiles")
                .update(updateData)
                .eq("id", profile.id);

            if (error) {
                console.error("Error updating profile:", error);
                alert("Failed to save details. Please try again.");
            } else {
                router.push(`/dashboard/${profile.role}`);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            alert("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!profile) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-4xl py-4 font-bold bg-gradient-to-r from-text-green to-text-light_green text-transparent bg-clip-text mb-4">
                        Complete Your Profile
                    </h1>
                    <p className="text-text-green">
                        Help startups discover your potential by sharing your background and skills 
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-center space-x-4">
                        <div className={`flex items-center ${currentStep >= 1 ? 'text-text-light_green' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                currentStep >= 1 ? 'bg-text-light_green text-white' : 'bg-gray-200'
                            }`}>
                                {currentStep > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
                            </div>
                            <span className="ml-2 font-medium">Basic Info</span>
                        </div>
                        <div className={`w-16 h-1 rounded ${currentStep >= 2 ? 'bg-text-light_green' : 'bg-gray-200'}`}></div>
                        <div className={`flex items-center ${currentStep >= 2 ? 'text-text-light_green' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                currentStep >= 2 ? 'bg-text-light_green text-white' : 'bg-gray-200'
                            }`}>
                                2
                            </div>
                            <span className="ml-2 font-medium">
                                {profile.role === 'intern' ? 'Skills & Education' : 'Company Details'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="bg-background-light border border-text-light_green/20 rounded-2xl shadow-xl overflow-hidden">
                        {/* Step 1: Basic Information */}
                        {currentStep === 1 && (
                            <div className="p-8">
                                <h2 className="text-xl md:text-2xl font-bold text-text-green mb-6 flex items-center">
                                    Basic Information
                                </h2>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-text-light_green mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-text-light_green mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-text-light_green mb-2">
                                            Phone Number *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-text-light_green mb-2">
                                            Location *
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                required
                                                value={formData.location}
                                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                                                className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                                                placeholder="City, State"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label className="block text-sm font-semibold text-text-light_green mb-2">
                                        Bio / About {profile.role === 'intern' ? 'Yourself' : 'Your Company'} *
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.bio}
                                        onChange={(e) => setFormData({...formData, bio: e.target.value})}
                                        className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                                        placeholder={profile.role === 'intern' 
                                            ? "Tell us about your background, interests, and what you're looking for in an internship..."
                                            : "Describe your company's mission, culture, and what makes it a great place for interns..."
                                        }
                                    />
                                </div>

                                <div className="flex justify-end mt-8">
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="px-8 py-3 bg-gradient-to-l from-text-light_green to-text-light_green/60 text-background-light font-semibold rounded-lg hover:bg-gradient-to-r hover:from-text-light_green hover:to-text-light_green/60 transition duration-200 flex items-center"
                                    >
                                        Next Step
                                        <CheckCircle className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Education & Skills (for interns) */}
                        {currentStep === 2 && profile.role === 'intern' && (
                            <div className="p-8">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    Education & Skills
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-text-light_green mb-2">
                                            University / College *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.university}
                                            onChange={(e) => setFormData({...formData, university: e.target.value})}
                                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                                            placeholder="e.g., Stanford University"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-text-light_green mb-2">
                                            Major / Field of Study *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.major}
                                            onChange={(e) => setFormData({...formData, major: e.target.value})}
                                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                                            placeholder="e.g., Computer Science"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-text-light_green mb-2">
                                            Expected Graduation Year *
                                        </label>
                                        <select
                                            required
                                            value={formData.graduationYear}
                                            onChange={(e) => setFormData({...formData, graduationYear: e.target.value})}
                                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                                        >
                                            <option value="">Select year</option>
                                            {[2024, 2025, 2026, 2027, 2028].map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-text-light_green mb-2">
                                            Resume / CV
                                        </label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-text-light_green/40 transition duration-200">
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileUpload}
                                                className="hidden"
                                                id="resume-upload"
                                            />
                                            <label htmlFor="resume-upload" className="cursor-pointer">
                                                <Upload className="w-8 h-8 text-text-light_green/40 mx-auto mb-2" />
                                                <p className="text-sm text-text-light_green/80">
                                                    {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                                                </p>
                                                <p className="text-xs text-text-light_green/60">PDF, DOC up to 10MB</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-text-light_green mb-4">
                                        Skills & Technologies
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {skills.map(skill => (
                                            <button
                                                key={skill}
                                                type="button"
                                                onClick={() => handleSkillToggle(skill)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                                                    formData.skills.includes(skill)
                                                        ? 'bg-text-light_green text-background-light'
                                                        : 'bg-text-light_green/20 text-text-light_green hover:bg-background-light'
                                                }`}
                                            >
                                                {skill}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between mt-8">
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="px-8 py-3 border border-gray-300 text-text-light_green font-semibold rounded-lg hover:bg-text-light_green/10 transition duration-200"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-8 py-3 bg-gradient-to-l from-text-light_green to-text-light_green/60 text-background-light font-semibold rounded-lg hover:bg-gradient-to-r hover:from-text-light_green hover:to-text-light_green/60 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 flex items-center"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Creating Profile...
                                            </>
                                        ) : (
                                            <>
                                                Complete Profile
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </form>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-sm text-text-green">
                        Your information is secure and will only be shared with relevant {profile.role === 'intern' ? 'startups' : 'candidates'}
                    </p>
                </div>
            </div>
        </div>
    );
}