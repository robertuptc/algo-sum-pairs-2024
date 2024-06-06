def sum_pairs(int_arr, desired_num):
    answer = []

    for i in range(0, len(int_arr) - 1):
        for j in range((i + 1), len(int_arr)):
            if int_arr[i] +  int_arr[j] == desired_num:
                answer.append([int_arr[i], int_arr[j]])
    
    if len(answer):
        return answer
    else:
        return 'unable to find pairs'