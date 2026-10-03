import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Dumbbell,
  Phone,
  MapPin,
  Clock,
  Star,
  Users,
  ShieldCheck,
  Award,
  Zap,
  CheckCircle,
  Flame,
  Activity,
  HeartPulse,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Send,
  Calendar,
  Compass
} from 'lucide-react';
import './styles.css';

const PHONE_NUMBER = '+91 95356 87158';
const TEL_LINK = 'tel:+919535687158';
const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Dynamic+Fitness+BTM+Layout+Bannerghatta+Road+Bengaluru';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: 'strength',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setFormSubmitted(true);
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container nav-wrap">
          <a href="#" className="brand">
            <div className="brand-icon">
              <Dumbbell size={22} />
            </div>
            <div className="brand-text">
              Dynamic <span>Fitness</span>
            </div>
          </a>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#programs" onClick={() => setMobileMenuOpen(false)}>Programs</a></li>
              <li><a href="#facilities" onClick={() => setMobileMenuOpen(false)}>Facilities</a></li>
              <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Memberships</a></li>
              <li><a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a href={TEL_LINK} className="btn-primary">
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge-wrap">
            <div className="hero-badge">
              <Star size={14} fill="currentColor" />
              <span>4.9★ Rated Fitness Centre (790+ Reviews)</span>
            </div>
          </div>

          <h1 className="hero-title">
            Transform Your Body. <br />
            <span className="glow-text">Elevate Your Limits.</span>
          </h1>

          <p className="hero-subtitle">
            Join BTM Layout’s premier strength, conditioning, and transformation community right opposite
            Gopalan Innovation Mall. State-of-the-art equipment, certified coaching, and custom fitness roadmaps
            designed to deliver lasting results.
          </p>

          <div className="hero-ctas">
            <a href={TEL_LINK} className="btn-primary">
              <Phone size={18} />
              <span>Join Today: {PHONE_NUMBER}</span>
            </a>
            <a href="#pricing" className="btn-secondary">
              <span>View Membership Plans</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="hero-pills">
            <div className="hero-pill">
              <Clock size={16} color="#f97316" />
              <span>Open Daily from 5:30 AM</span>
            </div>
            <div className="hero-pill">
              <Award size={16} color="#f97316" />
              <span>Certified Expert Trainers</span>
            </div>
            <div className="hero-pill">
              <MapPin size={16} color="#f97316" />
              <span>Opp. Gopalan Mall, BTM 2nd Stage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">790+</div>
              <div className="stat-label">Google Reviews</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">4.9★</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">10+</div>
              <div className="stat-label">Certified Coaches</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">6,000+</div>
              <div className="stat-label">Sq. Ft. Training Floor</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-tag">About Dynamic Fitness</span>
              <h2 className="section-title">Built For Results, Driven By Science</h2>
              <p>
                Located prominently on Bannerghatta Road in BTM Layout 2nd Stage, Dynamic Fitness is more than a gym —
                it is an energetic transformation studio built for athletes, working professionals, and fitness beginners alike.
              </p>
              <p>
                We reject quick-fix gimmicks in favor of progressive overload, functional movement patterns, and sustainable nutrition.
                Whether your goal is building lean muscle, dropping body fat, improving cardio endurance, or athletic conditioning,
                our supportive atmosphere keeps you accountable every step of the way.
              </p>

              <div className="about-coach-card">
                <div className="coach-avatar">AN</div>
                <div className="coach-info">
                  <h4>Coach Abhishek Nagaraj</h4>
                  <p>Founder & Head Coach • 12+ Years Strength Coaching</p>
                </div>
              </div>
            </div>

            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon">
                  <Flame size={22} />
                </div>
                <h4 className="pillar-title">Form-First Coaching</h4>
                <p className="pillar-desc">
                  Injury-free progression with constant floor supervision and form correction on every major lift.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <Activity size={22} />
                </div>
                <h4 className="pillar-title">Scientific Programming</h4>
                <p className="pillar-desc">
                  Structured meso-cycles, periodization, and biometric tracking to ensure consistent weekly breakthroughs.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <HeartPulse size={22} />
                </div>
                <h4 className="pillar-title">Sustainable Nutrition</h4>
                <p className="pillar-desc">
                  Realistic dietary guidance tailored to Indian eating habits without starvation or unsustainable fads.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">
                  <Users size={22} />
                </div>
                <h4 className="pillar-title">High-Energy Community</h4>
                <p className="pillar-desc">
                  An uplifting, respectful workout environment where seasoned lifters and newcomers cheer each other on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Programs</span>
            <h2 className="section-title">Engineered For Every Fitness Goal</h2>
            <p className="section-desc">
              Choose from specialized strength tracks, hybrid conditioning, or 1-on-1 personal mentorship.
            </p>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-header">
                <div className="program-icon-box">
                  <Dumbbell size={24} />
                </div>
                <h3 className="program-title">Strength & Hypertrophy</h3>
              </div>
              <p className="program-desc">
                Dedicated free-weight zones, competition Olympic bars, power cages, and dumbbells up to 50kg.
              </p>
              <ul className="program-features">
                <li><CheckCircle size={16} /> Power racks & deadlift platforms</li>
                <li><CheckCircle size={16} /> Isolated selectorized machines</li>
                <li><CheckCircle size={16} /> Progressive overload tracking</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <div className="program-icon-box">
                  <Zap size={24} />
                </div>
                <h3 className="program-title">Cardio & High-Intensity</h3>
              </div>
              <p className="program-desc">
                Metabolic conditioning using commercial treadmills, assault bikes, rowers, and HIIT circuits.
              </p>
              <ul className="program-features">
                <li><CheckCircle size={16} /> Commercial incline treadmills</li>
                <li><CheckCircle size={16} /> Concept2 rowing machines</li>
                <li><CheckCircle size={16} /> Heart-rate zone training</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <div className="program-icon-box">
                  <Flame size={24} />
                </div>
                <h3 className="program-title">Hybrid Functional & Boxing</h3>
              </div>
              <p className="program-desc">
                Dynamic functional turf equipped with heavy punch bags, battle ropes, kettlebells, and plyometrics.
              </p>
              <ul className="program-features">
                <li><CheckCircle size={16} /> Boxing heavy bags & speed drills</li>
                <li><CheckCircle size={16} /> Kettlebell & slam ball circuits</li>
                <li><CheckCircle size={16} /> Agility ladder & turf runs</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <div className="program-icon-box">
                  <Award size={24} />
                </div>
                <h3 className="program-title">1-on-1 Personal Training</h3>
              </div>
              <p className="program-desc">
                Exclusive dedicated coaching with personalized workout routines, posture correction, and body composition analysis.
              </p>
              <ul className="program-features">
                <li><CheckCircle size={16} /> Dedicated certified personal trainer</li>
                <li><CheckCircle size={16} /> Weekly body fat & biometric scans</li>
                <li><CheckCircle size={16} /> Custom macronutrient meal plans</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <div className="program-icon-box">
                  <Activity size={24} />
                </div>
                <h3 className="program-title">Weight Loss & Recomp</h3>
              </div>
              <p className="program-desc">
                Targeted fat burning while preserving lean muscle mass through metabolic resistance training.
              </p>
              <ul className="program-features">
                <li><CheckCircle size={16} /> Caloric deficit management</li>
                <li><CheckCircle size={16} /> Postural & core strengthening</li>
                <li><CheckCircle size={16} /> Sustainable habit coaching</li>
              </ul>
            </div>

            <div className="program-card">
              <div className="program-header">
                <div className="program-icon-box">
                  <Sparkles size={24} />
                </div>
                <h3 className="program-title">Mobility & Active Recovery</h3>
              </div>
              <p className="program-desc">
                Guided stretching routines, foam rolling, and joint mobility exercises to prevent stiffness and injuries.
              </p>
              <ul className="program-features">
                <li><CheckCircle size={16} /> Dedicated foam rolling area</li>
                <li><CheckCircle size={16} /> Resistance band mobility drills</li>
                <li><CheckCircle size={16} /> Pre-workout dynamic warm-ups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Premium Facilities</span>
            <h2 className="section-title">Designed For Elite Comfort & Hygiene</h2>
            <p className="section-desc">
              Experience a world-class training atmosphere with thoughtful amenities that respect your time.
            </p>
          </div>

          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">
                <ShieldCheck size={28} />
              </div>
              <h4 className="facility-title">Climate Controlled</h4>
              <p className="facility-desc">
                High-volume ventilation and air-conditioned floors to maintain optimal training temperature.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                <Users size={28} />
              </div>
              <h4 className="facility-title">Locker & Shower Cabins</h4>
              <p className="facility-desc">
                Hygienic private changing rooms, secure day lockers, and warm showers for before-work workouts.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                <Sparkles size={28} />
              </div>
              <h4 className="facility-title">Sanitized Daily</h4>
              <p className="facility-desc">
                Continuous surface wipe-downs, disinfectant stations, and strict cleanliness standards.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                <HeartPulse size={28} />
              </div>
              <h4 className="facility-title">Hydration & Fuel</h4>
              <p className="facility-desc">
                RO purified drinking water stations, whey protein shakes, and healthy pre-workout drinks available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership / Pricing Section */}
      <section id="pricing" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Transparent Memberships</span>
            <h2 className="section-title">Clear Pricing, Zero Hidden Fees</h2>
            <p className="section-desc">
              Straightforward membership plans in Indian Rupees (₹) with full facility access included.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Tier 1 */}
            <div className="pricing-card">
              <h3 className="pricing-tier">Monthly Flex</h3>
              <div className="pricing-price">
                <span className="price-amount">₹2,500</span>
                <span className="price-period">/ month</span>
              </div>
              <ul className="pricing-features">
                <li><CheckCircle size={16} /> Full gym floor access</li>
                <li><CheckCircle size={16} /> General floor trainer support</li>
                <li><CheckCircle size={16} /> Daily locker & shower access</li>
                <li><CheckCircle size={16} /> Free fitness orientation</li>
              </ul>
              <a href={TEL_LINK} className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Join Monthly
              </a>
            </div>

            {/* Tier 2 */}
            <div className="pricing-card">
              <h3 className="pricing-tier">Quarterly Kickstart</h3>
              <div className="pricing-price">
                <span className="price-amount">₹6,500</span>
                <span className="price-period">/ 3 months</span>
              </div>
              <ul className="pricing-features">
                <li><CheckCircle size={16} /> Save 15% vs monthly plan</li>
                <li><CheckCircle size={16} /> Full facility & cardio access</li>
                <li><CheckCircle size={16} /> 1 complimentary diet blueprint</li>
                <li><CheckCircle size={16} /> 1 free body composition analysis</li>
              </ul>
              <a href={TEL_LINK} className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Get Started
              </a>
            </div>

            {/* Tier 3: Popular */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3 className="pricing-tier">Annual Transformation</h3>
              <div className="pricing-price">
                <span className="price-amount">₹14,999</span>
                <span className="price-period">/ year (₹1,250/mo)</span>
              </div>
              <ul className="pricing-features">
                <li><CheckCircle size={16} /> 365 days unlimited gym access</li>
                <li><CheckCircle size={16} /> 2 complimentary personal training sessions</li>
                <li><CheckCircle size={16} /> Monthly progress & biometric check-ins</li>
                <li><CheckCircle size={16} /> Free locker registration & guest passes</li>
                <li><CheckCircle size={16} /> Priority booking for workshops</li>
              </ul>
              <a href={TEL_LINK} className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Claim Annual Offer
              </a>
            </div>

            {/* Tier 4 */}
            <div className="pricing-card">
              <h3 className="pricing-tier">Personal Training</h3>
              <div className="pricing-price">
                <span className="price-amount">₹6,000</span>
                <span className="price-period">/ month onwards</span>
              </div>
              <ul className="pricing-features">
                <li><CheckCircle size={16} /> 1-on-1 certified trainer</li>
                <li><CheckCircle size={16} /> 12 dedicated hour-long sessions</li>
                <li><CheckCircle size={16} /> Custom diet & macronutrient plan</li>
                <li><CheckCircle size={16} /> Constant WhatsApp accountability</li>
              </ul>
              <a href={TEL_LINK} className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Member Experiences</span>
            <h2 className="section-title">Real Words From Real Members</h2>
            <p className="section-desc">
              Rated 4.9★ across 790+ Google reviews in BTM Layout.
            </p>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="review-text">
                  “The trainers at Dynamic Fitness are exceptionally friendly and supportive. Individual attention
                  is given to every workout even on busy evenings. The gym is well-maintained and spotless.”
                </p>
              </div>
              <div className="reviewer-meta">
                <div className="reviewer-avatar">RM</div>
                <div className="reviewer-info">
                  <h4>Rahul M.</h4>
                  <p>BTM 2nd Stage Resident • Member for 14 Months</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="review-text">
                  “Best gym in BTM 2nd Stage opposite Gopalan Mall. The equipment variety is unmatched, and Coach Abhishek’s
                  transformation guidance helped me shed 12kg sustainably. Highly recommended!”
                </p>
              </div>
              <div className="reviewer-meta">
                <div className="reviewer-avatar">SR</div>
                <div className="reviewer-info">
                  <h4>Sneha R.</h4>
                  <p>Software Engineer • Personal Training Client</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="review-text">
                  “Spacious, energetic vibe, great crowd, and very clean. Being open early at 5:30 AM is perfect
                  for fitting in a solid lift before Bangalore traffic and office hours.”
                </p>
              </div>
              <div className="reviewer-meta">
                <div className="reviewer-avatar">KV</div>
                <div className="reviewer-info">
                  <h4>Karthik V.</h4>
                  <p>Strength Enthusiast • Member for 2 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Visit & Connect</span>
            <h2 className="section-title">Start Your Journey Today</h2>
            <p className="section-desc">
              Drop by our facility opposite Gopalan Innovation Mall or send us a quick inquiry.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location & Address</h4>
                  <p>
                    29, Bannerghatta Rd, opposite to Gopalan Mall, BHBCS Layout,
                    BTM Layout 2nd Stage, Bengaluru, Karnataka 560076
                  </p>
                  <p style={{ marginTop: '0.5rem' }}>
                    <a
                      href={MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#f97316', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <Compass size={16} /> Open in Google Maps
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Call / WhatsApp</h4>
                  <p>
                    <a href={TEL_LINK} style={{ color: '#f8fafc', fontWeight: 700, fontSize: '1.1rem' }}>
                      {PHONE_NUMBER}
                    </a>
                  </p>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    Direct line to front desk and personal training consultations
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Operating Hours</h4>
                  <p><strong>Monday – Saturday:</strong> 5:30 AM – 11:00 PM</p>
                  <p><strong>Sunday:</strong> 6:00 AM – 10:00 PM</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                    Open 365 days a year including public holidays
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="contact-form-box">
              <h3 className="form-title">Request a Free Day Pass</h3>
              {formSubmitted ? (
                <div className="form-success">
                  <CheckCircle size={36} style={{ margin: '0 auto 0.75rem', display: 'block' }} />
                  <h4>Thank You, {formData.name}!</h4>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    We received your inquiry. Call us at <strong>{PHONE_NUMBER}</strong> or show up at the reception desk to activate your complimentary session!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Interested Program</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    >
                      <option value="strength">Strength & Hypertrophy</option>
                      <option value="cardio">Cardio & HIIT</option>
                      <option value="boxing">Hybrid Workouts & Boxing</option>
                      <option value="pt">1-on-1 Personal Training</option>
                      <option value="loss">Weight Loss & Recomposition</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Any specific questions or goals? (Optional)</label>
                    <textarea
                      rows="3"
                      placeholder="e.g. Prefer morning slots 6 AM..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} />
                    <span>Get Free Consultation & Day Pass</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="brand">
                <div className="brand-icon">
                  <Dumbbell size={20} />
                </div>
                <div className="brand-text">
                  Dynamic <span>Fitness</span>
                </div>
              </div>
              <p className="footer-brand-desc">
                BTM Layout's top-rated fitness and transformation centre. Premium strength machines, cardio equipment,
                certified coaches, and motivating community opposite Gopalan Innovation Mall.
              </p>
            </div>

            <div className="footer-links-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Dynamic Fitness</a></li>
                <li><a href="#programs">Training Programs</a></li>
                <li><a href="#facilities">Gym Facilities</a></li>
                <li><a href="#pricing">Membership Plans</a></li>
                <li><a href="#reviews">Member Testimonials</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>Contact & Hours</h4>
              <ul>
                <li><a href={TEL_LINK}>Direct: {PHONE_NUMBER}</a></li>
                <li><a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">Opposite Gopalan Mall, BTM 2nd Stage</a></li>
                <li style={{ color: '#94a3b8' }}>Mon–Sat: 5:30 AM – 11:00 PM</li>
                <li style={{ color: '#94a3b8' }}>Sunday: 6:00 AM – 10:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 Dynamic Fitness BTM Layout. All rights reserved.
            </div>
            <div>
              Crafted for neighbourhood excellence in Bengaluru.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
