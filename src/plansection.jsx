import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import createaccountacademy from './createaccountacademy';
import './plan.css'
function plansection() {
  return (
    <div>
        <div class="App"></div>
     <div class="pricing-section">
        <div class="pricing-card">
        <div class="popular-badge">BASIC</div>
            <h3>Basic Learning Plan</h3>
            <div class="price-section">
                <span class="original-price">₹ 999.00</span>
                <span class="save-percentage">SAVE 50%</span>
            </div>
            <div class="price">₹ 499.00/mo</div>
            <a href="createaccountacademy"></a><button>Select</button>
            <div class="renew-price">Plan renews at ₹ 599.00/month</div>
            <ul class="features">
                <li>Access to 10 Courses</li>
                <li>Weekly Quizzes</li>
                <li>Monthly Assessments</li>
                <li>1:1 Mentor Support</li>
                <li>Community Access</li>
                <li>Certificate of Completion</li>
            </ul>
        </div>

        <div class="pricing-card">
        <div class="popular-badge">ADVANCE</div>
            <h3>Standard Learning Plan</h3>
            <div class="price-section">
                <span class="original-price">₹ 1999.00</span>
                <span class="save-percentage">SAVE 50%</span>
            </div>
            <div class="price">₹ 999.00/mo</div>
            <button>Select</button>
            <div class="renew-price">Plan renews at ₹ 1199.00/month</div>
            <ul class="features">
                <li>Access to 50 Courses</li>
                <li>Weekly Quizzes</li>
                <li>Monthly Assessments</li>
                <li>1:1 Mentor Support</li>
                <li>Community Access</li>
                <li>Certificate of Completion</li>
                <li>Career Counseling</li>
            </ul>
        </div>

        <div class="pricing-card popular">
            <div class="popular-badge">MOST POPULAR</div>
            <h3>Premium Learning Plan</h3>
            <div class="price-section">
                <span class="original-price">₹ 3999.00</span>
                <span class="save-percentage">SAVE 50%</span>
            </div>
            <div class="price">₹ 1999.00/mo</div>
            <button>Select</button>
            <div class="renew-price">Plan renews at ₹ 2399.00/month</div>
            <ul class="features">
                <li>Access to 100+ Courses</li>
                <li>Weekly Quizzes</li>
                <li>Monthly Assessments</li>
                <li>1:1 Mentor Support</li>
                <li>Community Access</li>
                <li>Certificate of Completion</li>
                <li>Career Counseling</li>
                <li>Interview Preparation</li>
                <li>Priority Support</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default plansection
