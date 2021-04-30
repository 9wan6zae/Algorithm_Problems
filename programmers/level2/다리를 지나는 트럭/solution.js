function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  
  const target_length = truck_weights.length;
  
  let time = 0;
  let on_bridge = [];
  let pass_bridge = [];
  while(pass_bridge.length != target_length) {
      time++;
      const first_truck_weight = truck_weights[0];
      if (on_bridge.length > 0) {
          const pass_ok = time - on_bridge[0].time == bridge_length;
          if (pass_ok) {
              const pass_truck = on_bridge.shift();
              pass_bridge.push(pass_truck);
          }
      }
      const bridge_weight = calc_weight(on_bridge);
      if (bridge_weight + first_truck_weight <= weight) {
          const first_truct = {};
          first_truct.weight = truck_weights.shift();
          first_truct.time = time;
          on_bridge.push(first_truct);
      }
  }
  answer = time;
  
  return answer;
}

function calc_weight(on_bridge) {
  let weight = 0;
  for (let i in on_bridge) {
      weight += on_bridge[i].weight;
  }
  return weight;
}