async function getUserData() {
    try {
      const response = await fetch('http://<CDN-LB-1966887955.us-east-1.elb.amazonaws.com>:8083/user');
      const data = await response.json();
      document.getElementById('userData').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  async function getProductData() {
    try {
      const response = await fetch('http://<CDN-LB-1966887955.us-east-1.elb.amazonaws.com>:8084/product');
      const data = await response.json();
      document.getElementById('productData').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }
  
  async function getOrderData() {
    try {
      const response = await fetch('http://<CDN-LB-1966887955.us-east-1.elb.amazonaws.com>:8085/order');
      const data = await response.json();
      document.getElementById('orderData').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error fetching order data:', error);
    }
  }
  
  async function getUserHealthStatus() {
    try {
      const response = await fetch('http://<CDN-LB-1966887955.us-east-1.elb.amazonaws.com>:8083/user/health');
      const data = await response.text();
      document.getElementById('healthStatus').innerText = data;
    } catch (error) {
      console.error('Error fetching user health status:', error);
    }
  }

  async function getOrderHealthStatus() {
    try {
      const response = await fetch('http://<CDN-LB-1966887955.us-east-1.elb.amazonaws.com>:8085/order/health');
      const data = await response.text();
      document.getElementById('healthStatus').innerText = data;
    } catch (error) {
      console.error('Error fetching order health status:', error);
    }
  }

  async function getProductHealthStatus() {
    try {
      const response = await fetch('http://<CDN-LB-1966887955.us-east-1.elb.amazonaws.com>:8084/product/health');
      const data = await response.text();
      document.getElementById('healthStatus').innerText = data;
    } catch (error) {
      console.error('Error fetching product health status:', error);
    }
  }
  
  fetch('http://<CDN-LB-1966887955.us-east-1.elb.amazonaws.com>:8083/user')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching user data:', error));
  
  fetch('http://<CDN-LB-1966887955.us-east-1.elb.amazonaws.com>:8084/product')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching product data:', error));

  fetch('http://<CDN-LB-1966887955.us-east-1.elb.amazonaws.com>:8085/order')    
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching order data:', error));
  
  // Trigger API calls on page load
  document.addEventListener('DOMContentLoaded', () => {
    getUserData();
    getProductData();
    getOrderData();
    getUserHealthStatus();
  });
  
