'use client';

import React, { useState } from 'react';
import { 
    Building, User, Shield, CheckCircle, Globe, 
    Mail, MapPin, Users, Award, FileText, Camera
} from 'lucide-react';
import Link from 'next/link';

const StartupVerificationPage = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        // Company Basics
        companyName: '',
        website: '',
        industry: '',
        employeeCount: '',
        location: '',
        
        // Founder Info
        founderName: '',
        founderEmail: '',
        founderLinkedin: '',
        
        // Trust Building
        companyDescription: '',
        companyLogo: null,
        businessDocument: null
    });

    const industries = [
        'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Gaming',
        'SaaS', 'Fintech', 'Edtech', 'Healthtech', 'AI/ML', 'Other'
    ];

    const employeeCounts = ['1-10', '11-50', '51-200', '200+'];

    const handleSubmit = async () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        console.log('Verification submitted:', formData);
        }, 2000);
    };

return (
    <div className="min-h-screen bg-background-light py-8 px-4">
        <div className="flex max-w-7xl mx-auto justify-between relative gap-8">
            <div>
            <div className='bg-text-light_green/20 border border-text-light_green/20 h-max p-6 rounded-xl'>
                {/* Header */}
                <div className="mb-8">
                <h1 className="text-2xl md:text-4xl py-4 font-bold bg-gradient-to-r from-text-green to-text-light_green text-transparent bg-clip-text mb-4">
                    Verify Your Startup
                </h1>
                <p className="text-sm md:text-lg text-text-green max-w-2xl text-justify mx-auto">
                    Build trust with potential interns by verifying your startup. This helps students feel confident about applying to your opportunities.
                </p>
                </div>

                {/* Trust Badges */}
                <div className="grid gap-2 md:gap-4 mb-8 px-16">
                <div className="bg-text-light_green/20 backdrop-blur-sm border border-text-light_green/20 rounded-xl p-2 md:p-4 shadow-lg text-center">
                    <p className="text-sm md:text-md font-semibold text-text-green">Verified Badge</p>
                    <p className="text-xs text-text-light_green">Earn student trust</p>
                </div>
                <div className="bg-text-light_green/20 backdrop-blur-sm border border-text-light_green/20 rounded-xl p-2 md:p-4 shadow-lg text-center">
                    <p className="text-sm md:text-md font-semibold text-text-green">More Applications</p>
                    <p className="text-xs text-text-light_green">3x higher response rate</p>
                </div>
                <div className="bg-text-light_green/20 backdrop-blur-sm border border-text-light_green/20 rounded-xl p-2 md:p-4 shadow-lg text-center">
                    <p className="text-sm md:text-md font-semibold text-text-green">Premium Profile</p>
                    <p className="text-xs text-text-light_green">Stand out from crowd</p>
                </div>
                </div>
            </div>
            {/* What's Next */}
            <div className="mt-6 bg-text-light_green/20 rounded-xl border border-text-light_green/20 p-6 shadow-2xl shadow-text-light_green/20">
                <h3 className="font-semibold text-text-green mb-3">What happens next?</h3>
                <div className="space-y-2 text-sm text-text-light_green">
                    <div className="flex items-center">
                    <div className="w-2 h-2 bg-text-light_green rounded-full mr-3"></div>
                    We'll review your information within 24 hours
                    </div>
                    <div className="flex items-center">
                    <div className="w-2 h-2 bg-text-light_green rounded-full mr-3"></div>
                    You'll get a verified badge on your profile
                    </div>
                    <div className="flex items-center">
                    <div className="w-2 h-2 bg-text-light_green rounded-full mr-3"></div>
                    Start posting internship opportunities immediately
                    </div>
                </div>
            </div>
            </div>

            <div className='max-w-2xl w-full'>
                {/* Form */}
                <div className="bg-background-light/80 backdrop-blur-sm border border-text-light_green/20 rounded-2xl shadow-xl p-4 md:p-8">
                <div className="space-y-6">
                    
                    {/* Company Basics */}
                    <div>
                    <h3 className="text-lg md:text-xl font-semibold text-text-green mb-4 flex items-center">
                        Company Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-text-light_green mb-2">
                            Company Name *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                            placeholder="e.g., TechStart Inc."
                        />
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-text-light_green mb-2">
                            Website *
                        </label>
                        <div className="relative">
                            <Globe className="absolute left-3 top-3.5 w-5 h-5 text-text-light_green" />
                            <input
                            type="url"
                            required
                            value={formData.website}
                            onChange={(e) => setFormData({...formData, website: e.target.value})}
                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm pl-11 pr-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                            placeholder="https://yourcompany.com"
                            />
                        </div>
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-text-light_green mb-2">
                            Industry *
                        </label>
                        <select
                            required
                            value={formData.industry}
                            onChange={(e) => setFormData({...formData, industry: e.target.value})}
                            className="w-full bg-text-light_green/20 text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                        >
                            <option value="">Select Industry</option>
                            {industries.map(industry => (
                            <option key={industry} value={industry}>{industry}</option>
                            ))}
                        </select>
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-text-light_green mb-2">
                            Company Size *
                        </label>
                        <div className="relative">
                            <Users className="absolute left-3 top-3.5 w-5 h-5 text-text-light_green" />
                            <select
                            required
                            value={formData.employeeCount}
                            onChange={(e) => setFormData({...formData, employeeCount: e.target.value})}
                            className="w-full bg-text-light_green/20 text-text-light_green/50 backdrop-blur-sm pl-11 pr-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                            >
                            <option value="">Select Size</option>
                            {employeeCounts.map(count => (
                                <option key={count} value={count}>{count} employees</option>
                            ))}
                            </select>
                        </div>
                        </div>

                        <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-text-light_green mb-2">
                            Location *
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-text-light_green" />
                            <input
                            type="text"
                            required
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm pl-11 pr-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                            placeholder="e.g., San Francisco, CA"
                            />
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Founder Info */}
                    <div>
                    <h3 className="text-lg md:text-xl font-semibold text-text-green mb-4 flex items-center">
                        Founder Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-text-light_green mb-2">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.founderName}
                            onChange={(e) => setFormData({...formData, founderName: e.target.value})}
                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                            placeholder="Your full name"
                        />
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-text-light_green mb-2">
                            Work Email *
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-text-light_green" />
                            <input
                            type="email"
                            required
                            value={formData.founderEmail}
                            onChange={(e) => setFormData({...formData, founderEmail: e.target.value})}
                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm pl-11 pr-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                            placeholder="you@company.com"
                            />
                        </div>
                        </div>

                        <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-text-light_green mb-2">
                            LinkedIn Profile *
                        </label>
                        <input
                            type="url"
                            required
                            value={formData.founderLinkedin}
                            onChange={(e) => setFormData({...formData, founderLinkedin: e.target.value})}
                            className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                            placeholder="https://linkedin.com/in/yourname"
                        />
                        </div>
                    </div>
                    </div>

                    {/* Company Description */}
                    <div>
                    <label className="block text-sm font-medium text-text-light_green mb-2">
                        Company Description *
                    </label>
                    <textarea
                        rows={4}
                        required
                        value={formData.companyDescription}
                        onChange={(e) => setFormData({...formData, companyDescription: e.target.value})}
                        className="w-full bg-text-light_green/20 placeholder:text-text-light_green/50 backdrop-blur-sm px-4 py-3 border border-text-light_green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light_green/50 transition duration-200"
                        placeholder="Briefly describe what your company does, your mission, and what makes it special for interns..."
                    />
                    </div>

                    {/* Upload Section */}
                    <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-text-light_green mb-3">
                        Company Logo
                        </label>
                        <div className="border-2 bg-text-light_green/20 backdrop-blur-sm border-dashed border-text-light_green/30 rounded-lg p-4 text-center hover:border-text-light_green/60 transition duration-200 cursor-pointer">
                        <Camera className="w-6 h-6 text-text-green/70 mx-auto mb-2" />
                        <p className="text-sm text-text-light_green/70">Upload logo</p>
                        <p className="text-xs text-text-light_green/70">PNG, JPG up to 5MB</p>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-light_green mb-3">
                        Business Document *
                        </label>
                        <div className="border-2 bg-text-light_green/20 backdrop-blur-sm border-dashed border-text-light_green/30 rounded-lg p-4 text-center hover:border-text-light_green/60 transition duration-200 cursor-pointer">
                        <FileText className="w-6 h-6 text-text-green/70 mx-auto mb-2" />
                        <p className="text-sm text-text-light_green/70">Business registration</p>
                        <p className="text-xs text-text-light_green/70">PDF, JPG up to 10MB</p>
                        </div>
                    </div>
                    </div>

                    {/* Trust Message */}
                    <div className="bg-text-light_green/10 border-2 border-text-light_green/70 rounded-lg p-4">
                    <div className="flex items-start">
                        <Shield className="w-5 h-5 text-text-light_green mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                        <h4 className="font-medium text-text-green">Why verify?</h4>
                        <p className="text-sm text-text-light_green mt-1">
                            Verification helps students trust your startup and increases application rates by 3x. Your documents are secure and only used for verification.
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* Submit Button */}
                    <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-text-light_green/80 to-text-light_green/50 text-white font-semibold rounded-lg hover:from-text-light_green/50 hover:to-text-light_green/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed ease-in duration-200 flex items-center justify-center"
                    >
                    {loading ? (
                        <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                        </>
                    ) : (
                        <>
                        Get Verified
                        <CheckCircle className="w-5 h-5 ml-2" />
                        </>
                    )}
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default StartupVerificationPage;